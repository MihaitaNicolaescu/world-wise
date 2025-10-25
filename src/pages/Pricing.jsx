import PageNav from "../components/PageNav";
import styles from './Pricing.module.css';
import { Link } from 'react-router-dom';

const TIERS = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$0',
    billing: 'forever',
    features: ['Track up to 3 journeys', 'Basic analytics', 'Community support'],
    cta: '/signup'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9',
    billing: 'mo',
    features: ['Unlimited journeys', 'Advanced analytics', 'Priority email support', 'Exportable reports'],
    recommended: true,
    cta: '/signup'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact us',
    billing: '',
    features: ['SLA & dedicated support', 'Custom integrations', 'Onboarding & training'],
    cta: '/contact'
  }
];

function Pricing () {
  return (
    <div className={styles.pricing}>
      <PageNav />

      <header className={styles.hero}>
        <h1>Plans that scale with you</h1>
        <p>Choose a plan that fits your needs from trial to enterprise-grade support.</p>
      </header>

      <section className={styles.cards} aria-label="Pricing plans">
        {TIERS.map(t => (
          <article key={t.id} className={`${styles.card} ${t.recommended ? styles.recommended : ''}`}>
            <div className={styles.cardHeader}>
              <h2>{t.name}</h2>
              <div className={styles.price}>
                <span className={styles.amount}>{t.price}</span>
                {t.billing && <span className={styles.billing}>/{t.billing}</span>}
              </div>
            </div>

            <ul className={styles.features}>
              {t.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <div className={styles.cardFooter}>
              <Link to={t.cta} className={styles.cta}>{t.recommended ? 'Get Pro' : (t.price === '$0' ? 'Start Free' : 'Contact Sales')}</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Pricing;