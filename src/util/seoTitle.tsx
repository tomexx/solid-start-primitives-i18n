import { useI18n } from '@solid-primitives/i18n'

export const seoTitle = () => {
	const [t] = useI18n()

	return `${t("hello", { name: "John" }, "Hello {{ name }}!")}!`
}
