"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { products } from "@/data/products";
import { primaryNavigation } from "@/data/site";

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!productsMenuRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (productsMenuRef.current?.contains(document.activeElement)) {
          productsMenuRef.current.querySelector<HTMLButtonElement>("button")?.focus();
        }
        setProductsOpen(false);
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="site-header" onClickCapture={(event) => {
      if ((event.target as Element).closest("a")) setProductsOpen(false);
    }}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Hidriving home">
          <Image src="/images/hidriving-logo-mixed-case.png" alt="Hidriving" width={1254} height={1254} sizes="(max-width: 760px) 168px, 190px" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) =>
            item.label === "Products" ? (
              <div className="nav-dropdown" key={item.href} ref={productsMenuRef}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setProductsOpen(false);
                }}>
                <Link href={item.href}>{item.label}</Link>
                <button type="button" className="products-menu-toggle" aria-label="Toggle product platforms"
                  aria-expanded={productsOpen} aria-controls="product-platforms-menu"
                  onClick={() => setProductsOpen((open) => !open)}>▾</button>
                <div className="mega-menu" id="product-platforms-menu" hidden={!productsOpen}>
                  <div>
                    <p className="eyebrow">Product platforms</p>
                    <h3>Vehicle-specific systems</h3>
                    <p>Browse current models by vehicle and engine platform.</p>
                    <Link className="text-link" href="/products">View all 17 models →</Link>
                  </div>
                  <div className="mega-links">
                    {products.slice(0, 6).map((product) => (
                      <Link href={`/products/${product.slug}`} key={product.slug}>
                        <strong>{product.engine}</strong>
                        <span>{product.vehicle}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ),
          )}
        </nav>
        <Link className="button button-small header-cta" href="/contact">Get a Quote</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-menu-panel">
            {primaryNavigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={closeMobileMenu}>{item.label}</Link>
            ))}
            <Link className="button" href="/contact" onClick={closeMobileMenu}>Get a Quote</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
