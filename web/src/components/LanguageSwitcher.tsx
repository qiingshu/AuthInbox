import { useLanguage } from '@/i18n';
export function LanguageSwitcher(): JSX.Element {
	const { language, setLanguage } = useLanguage();
	return <div role="group" aria-label="语言 / Language" className="inline-flex shrink-0 gap-1 rounded-lg border border-border bg-background p-1 text-xs">
		{(['zh', 'en'] as const).map(value => <button key={value} type="button" lang={value === 'zh' ? 'zh-CN' : 'en'} aria-pressed={language === value} onClick={() => setLanguage(value)} className={'rounded-md px-2.5 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' + (language === value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}>{value === 'zh' ? '中文' : 'EN'}</button>)}
	</div>;
}
