import type { FatContent, PriceRange, FlavorIntensity } from '../data/types';

// ========== TOUGHNESS BADGE ==========
interface ToughnessBadgeProps {
  value: number; // 1-10 scale
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ToughnessBadge: React.FC<ToughnessBadgeProps> = ({
  value,
  showLabel = true,
  size = 'md'
}) => {
  const tenderness = 11 - value; // Invert: 10 = very tender, 1 = very tough

  const getColor = () => {
    if (value <= 2) return { bg: 'bg-green-100', text: 'text-green-700', bar: 'bg-green-500' };
    if (value <= 4) return { bg: 'bg-lime-100', text: 'text-lime-700', bar: 'bg-lime-500' };
    if (value <= 6) return { bg: 'bg-yellow-100', text: 'text-yellow-700', bar: 'bg-yellow-500' };
    if (value <= 8) return { bg: 'bg-orange-100', text: 'text-orange-700', bar: 'bg-orange-500' };
    return { bg: 'bg-red-100', text: 'text-red-700', bar: 'bg-red-500' };
  };

  const getLabel = () => {
    if (value <= 2) return 'Very Tender';
    if (value <= 4) return 'Tender';
    if (value <= 6) return 'Moderate';
    if (value <= 8) return 'Tough';
    return 'Very Tough';
  };

  const colors = getColor();
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full ${colors.bg} ${sizeClasses[size]}`}>
      {showLabel && <span className={`font-medium ${colors.text}`}>{getLabel()}</span>}
      <div className="flex gap-0.5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-3 rounded-sm ${i < tenderness ? colors.bar : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

// ========== FAT CONTENT BADGE ==========
interface FatContentBadgeProps {
  value: FatContent;
  size?: 'sm' | 'md' | 'lg';
}

export const FatContentBadge: React.FC<FatContentBadgeProps> = ({ value, size = 'md' }) => {
  const config: Record<FatContent, { bg: string; text: string; icon: string }> = {
    'Low': { bg: 'bg-blue-100', text: 'text-blue-700', icon: '○' },
    'Moderate': { bg: 'bg-teal-100', text: 'text-teal-700', icon: '◐' },
    'High': { bg: 'bg-amber-100', text: 'text-amber-700', icon: '◕' },
    'Very High': { bg: 'bg-orange-100', text: 'text-orange-700', icon: '●' }
  };

  const c = config[value];
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${c.bg} ${c.text} font-medium ${sizeClasses[size]}`}>
      <span>{c.icon}</span>
      {value} Fat
    </span>
  );
};

// ========== PRICE BADGE ==========
interface PriceBadgeProps {
  value: PriceRange;
  showRange?: boolean;
  pricePerKg?: { min: number; max: number };
  size?: 'sm' | 'md' | 'lg';
}

export const PriceBadge: React.FC<PriceBadgeProps> = ({
  value,
  showRange = false,
  pricePerKg,
  size = 'md'
}) => {
  const config: Record<PriceRange, { bg: string; text: string }> = {
    '$': { bg: 'bg-green-100', text: 'text-green-700' },
    '$$': { bg: 'bg-lime-100', text: 'text-lime-700' },
    '$$$': { bg: 'bg-amber-100', text: 'text-amber-700' },
    '$$$$': { bg: 'bg-red-100', text: 'text-red-700' }
  };

  const c = config[value];
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${c.bg} ${c.text} font-medium ${sizeClasses[size]}`}>
      {value}
      {showRange && pricePerKg && (
        <span className="text-opacity-75">
          (${pricePerKg.min}-${pricePerKg.max}/kg)
        </span>
      )}
    </span>
  );
};

// ========== MARBLING BADGE ==========
interface MarblingBadgeProps {
  score: number; // 1-12 BMS scale
  size?: 'sm' | 'md' | 'lg';
}

export const MarblingBadge: React.FC<MarblingBadgeProps> = ({ score, size = 'md' }) => {
  const getGrade = () => {
    if (score <= 3) return { label: 'Select', bg: 'bg-gray-100', text: 'text-gray-700' };
    if (score <= 5) return { label: 'Choice', bg: 'bg-blue-100', text: 'text-blue-700' };
    if (score <= 7) return { label: 'Prime', bg: 'bg-amber-100', text: 'text-amber-700' };
    return { label: 'Wagyu', bg: 'bg-purple-100', text: 'text-purple-700' };
  };

  const grade = getGrade();
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${grade.bg} ${grade.text} font-medium ${sizeClasses[size]}`}>
      BMS {score} • {grade.label}
    </span>
  );
};

// ========== FLAVOR INTENSITY BADGE ==========
interface FlavorBadgeProps {
  value: FlavorIntensity;
  size?: 'sm' | 'md' | 'lg';
}

export const FlavorBadge: React.FC<FlavorBadgeProps> = ({ value, size = 'md' }) => {
  const config: Record<FlavorIntensity, { bg: string; text: string }> = {
    'Mild': { bg: 'bg-sky-100', text: 'text-sky-700' },
    'Moderate': { bg: 'bg-teal-100', text: 'text-teal-700' },
    'Robust': { bg: 'bg-orange-100', text: 'text-orange-700' },
    'Intense': { bg: 'bg-red-100', text: 'text-red-700' }
  };

  const c = config[value];
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <span className={`inline-flex items-center rounded-full ${c.bg} ${c.text} font-medium ${sizeClasses[size]}`}>
      {value} Flavor
    </span>
  );
};

// ========== COOKING METHOD BADGE ==========
interface CookingMethodBadgeProps {
  method: string;
  isRecommended?: boolean;
}

export const CookingMethodBadge: React.FC<CookingMethodBadgeProps> = ({
  method,
  isRecommended = true
}) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
      isRecommended
        ? 'bg-green-100 text-green-700'
        : 'bg-gray-100 text-gray-500'
    }`}>
      {method}
    </span>
  );
};
