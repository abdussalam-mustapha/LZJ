import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Building the Backbone of Smarter Business
          </h1>
          <p className={styles.heroSubtitle}>
            Transforming how organizations collect, manage, and utilize data.
          </p>
          <div className={styles.heroButtons}>
            <Button variant="primary" href="#contact">
              Get Started
            </Button>
            <Button variant="outline" href="#about">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" variant="light">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>About LZJ_ESOL’N</h2>
            <p>
              We’re building the backbone of smarter, more adaptive businesses across Africa by transforming how organizations collect, manage, and utilize data. Our work focuses on eliminating inefficiencies in business operations through intelligent, scalable software that enables clarity, accountability, and performance.
            </p>
            <p>
              Our long-term vision is to set new standards for operational excellence in Africa by leveraging technology not just as a tool, but as a driver of transformation.
            </p>
            <Button variant="secondary">Read Our Story</Button>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/about-image.png"
              alt="Team collaboration at LZJ_ESOL'N"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-800)' }}>
            Intelligent solutions for modern businesses.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <Card title="Dashboards" imageSrc="/dashboard.png" imageAlt="Business dashboard with KPIs and analytics">
            Real-time visualization of your business KPIs. Gain clarity and insight into your operations with our custom dashboards.
          </Card>
          <Card title="Portals" imageSrc="/portal.png" imageAlt="Secure client portal interface">
            Secure client and employee portals that streamline communication and data sharing.
          </Card>
          <Card title="Inventory Management" imageSrc="/inventory.png" imageAlt="Inventory management system">
            Smart inventory systems that track stock levels, predict demand, and automate reordering.
          </Card>
          <Card title="AI Integration" imageSrc="/ai.png" imageAlt="AI and machine learning interface">
            Leverage AI to automate workflows and build intelligent decision systems that learn from business behavior.
          </Card>
        </div>
      </Section>

      {/* Mission Section */}
      <Section variant="gold">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#000000' }}>Our Mission</h2>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: '#000000' }}>
            To become a leading force in building smart, cost-effective systems that simplify daily operations for businesses. We aim to bridge the gap between traditional operations and modern, tech-enabled business practices.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" variant="light">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-800)' }}>
            Ready to transform your business? Let&apos;s talk.
          </p>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input type="text" id="name" className={styles.input} placeholder="Your Name" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} placeholder="your@email.com" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea id="message" className={styles.textarea} placeholder="How can we help you?"></textarea>
          </div>
          <Button variant="primary" fullWidth type="submit">
            Send Message
          </Button>
        </form>
      </Section>
    </div>
  );
}
