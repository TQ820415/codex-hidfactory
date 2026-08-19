"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { products } from "@/data/products";
import { primaryNavigation } from "@/data/site";

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Hidriving home">
          <Image src="/images/hidriving-logo.png" alt="Hidriving" width={1600} height={1600} sizes="158px" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) =>
            item.label === "Products" ? (
              <details className="nav-dropdown" key={item.href}>
                <summary>{item.label}</summary>
                <div className="mega-menu">
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
              </details>
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
