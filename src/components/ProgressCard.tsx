import { Progress } from './ui/progress';

interface Props {
  className?: string;
  description?: string;
  value: number;
}

export default function ProgressCard({ className, description, value }: Props) {
  return (
    <div className={className}>
      <div className="w-full flex justify-between items-end">
        <span className="text-xs text-muted-foreground">{description}</span>
        <span className="text-brand text-sm">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}
