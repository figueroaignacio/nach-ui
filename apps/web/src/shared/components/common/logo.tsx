import { Link } from '@/i18n/navigation';
import { LOGO_ASCII, SIZES } from '@/lib/logo-ascii';

export function Logo({ size = 'md' }: { size?: keyof typeof SIZES }) {
  return (
    <Link href="/" aria-label="NachUI" className="inline-flex items-center">
      <pre className={`font-mono leading-none whitespace-pre ${SIZES[size]}`}>
        {LOGO_ASCII[size]}
      </pre>
    </Link>
  );
}
