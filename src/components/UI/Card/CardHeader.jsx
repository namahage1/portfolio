import PortfolioTeaser from '../PortfolioSections/PortfolioTeaser';

export default function CardHeader({ user }) {
  return (
    <div className="card-header">
      <PortfolioTeaser user={user} />
      <a href={`tel:${user.phone}`} className="ms-2 me-auto">
        {user.phone}
      </a>
    </div>
  );
}
