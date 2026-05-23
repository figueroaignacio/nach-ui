import { Link } from '@/i18n/navigation';
import { LOGO_ASCII } from '@/lib/logo-ascii';

const SIZES: Record<keyof typeof LOGO_ASCII, string> = {
  mobile: 'text-[5px]',
  sm: 'text-[3px] sm:text-[3px]',
  md: 'text-[10px] sm:text-xs',
  lg: 'text-[12px] sm:text-sm',
  xl: 'text-[14px] sm:text-base',
  skills: 'text-[10px] sm:text-xs',
};

export function Logo({ size = 'md' }: { size?: keyof typeof SIZES }) {
  return (
    <Link href="/" aria-label="NachUI" className="inline-flex items-center">
      <pre className={`font-mono leading-none whitespace-pre ${SIZES[size]}`}>
        {LOGO_ASCII[size]}
      </pre>
    </Link>
  );
}
