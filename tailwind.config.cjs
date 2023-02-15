module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			desktop: '1440px',
			tablet: '768px',
		},
		colors: {
			black: '#2B3442',
			bluishGrey: '#4B6A9B',
			darkGrey: '#697C9A',
			blue: '#0079FF',
			lightGrey: '#F6F8FF',
			white: '#FEFEFE',
			whiteDm: '#FFFFFF',
			blackDm: '#141D2F',
			bluishGreyDm: '#1E2A47',
		},
		fontFamily: {
			spaceMono: ['Space Mono', 'monospace'],
		},
		fontSize: {
			xxl: ['26px', { lineHeight: '39px', fontWeight: 700 }],
			xl: ['22px', { lineHeight: '33px', fontWeight: 700 }],
			l: ['18px', { lineHeight: '25px', fontWeight: 700 }],
			m: ['16px', { lineHeight: '24px', fontWeight: 700 }],
			s: ['15px', { lineHeight: '25px', fontWeight: 400 }],
			xs: ['13px', { lineHeight: '19px', fontWeight: 400 }],
		},
		extend: {},
	},
	plugins: [],
};
