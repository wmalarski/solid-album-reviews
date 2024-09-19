import { flatten, resolveTemplate, translator } from "@solid-primitives/i18n";
import {
	type Accessor,
	type ParentProps,
	createContext,
	createMemo,
	createSignal,
	useContext,
} from "solid-js";

const en_dict = {
	DeleteAlbum: {
		delete: "Delete Album",
		trigger: "Delete",
	},
	DeleteReviewDialog: {
		title: "Delete review",
		trigger: "Delete review",
	},
	DeleteReviewForm: {
		cancel: "Cancel",
		remove: "Remove",
	},
	Dialog: {
		close: "Close Dialog",
		cancel: "Cancel",
	},
	GoogleRedirectButton: {
		text: "Google",
	},
	InsertReviewDialog: {
		title: "Review album",
		trigger: "Review",
	},
	Pagination: {
		next: "Next",
		of: "{{current}} of {{max}}",
		previous: "Previous",
	},
	ReviewForm: {
		rateLabel: "Rate",
		submit: "Submit",
		textLabel: "Text",
	},
	ReviewItem: {
		date: "Date",
		rate: "Rate",
		reviews: "Reviews",
		text: "Text",
	},
	ReviewsFilters: {
		button: "Search",
		lower: "Lower",
		search: "Search",
		upper: "Upper",
	},
	SearchInput: {
		button: "Search",
		label: "Search",
		placeholder: "Search",
	},
	SignIn: {
		button: "Sign In",
		email: "Email",
		header: "Sign In",
		password: "Password",
		signUp: "Sign Up",
	},
	SignUp: {
		button: "Sign Up",
		email: "Email",
		header: "Sign Up",
		password: "Password",
		signIn: "Sign In",
	},
	UpdateAlbumDialog: {
		title: "Update album",
		trigger: "Update",
	},
	AlbumFields: {
		titleLabel: "Title",
		yearLabel: "Year",
	},
	UpdateReviewDialog: {
		title: "Update review",
		trigger: "Update review",
	},
	YtRedirectButton: {
		text: "YouTube",
	},
	error: {
		notFound: "Not Found",
	},
	header: {
		reviews: "Reviews",
		search: "Search",
		signOut: "Sign Out",
		title: "Album Reviews",
	},
	home: {
		refetch: "Reload",
	},
	loading: {
		text: "Loading...",
	},
	common: {
		submit: "Submit",
	},
};

export type Locale = "en";

const dictionaries = { en: en_dict };

type Accessed<T> = T extends Accessor<infer A> ? A : never;

export const createI18nValue = () => {
	const [locale, setLocale] = createSignal<Locale>("en");

	const translate = createMemo(() => {
		const dict = flatten(dictionaries[locale()]);
		return translator(() => dict, resolveTemplate);
	});

	const t: Accessed<typeof translate> = (path, ...args) => {
		return translate()(path, ...args);
	};

	return { locale, setLocale, t };
};

type I18nContextValue = ReturnType<typeof createI18nValue>;

export const I18nContext = createContext<I18nContextValue>({
	locale: () => "en" as const,
	setLocale: () => void 0,
	t: () => {
		throw new Error("Not implemented");
	},
});

export function I18nContextProvider(props: ParentProps) {
	const value = createI18nValue();

	return (
		<I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>
	);
}

export const useI18n = () => {
	return useContext(I18nContext);
};
