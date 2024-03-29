/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,html,vue}'],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: 'rgba(0, 0, 0, <alpha-value>)',
      white: 'rgba(255, 255, 255, <alpha-value>)',
      dark: {
        50: 'rgba(var(--yu-colors-dark-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-dark-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-dark-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-dark-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-dark-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-dark-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-dark-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-dark-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-dark-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-dark-900), <alpha-value>)',
      },
      gray: {
        50: 'rgba(var(--yu-colors-gray-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-gray-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-gray-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-gray-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-gray-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-gray-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-gray-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-gray-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-gray-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-gray-900), <alpha-value>)',
      },
      red: {
        50: 'rgba(var(--yu-colors-red-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-red-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-red-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-red-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-red-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-red-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-red-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-red-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-red-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-red-900), <alpha-value>)',
      },
      pink: {
        50: 'rgba(var(--yu-colors-pink-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-pink-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-pink-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-pink-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-pink-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-pink-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-pink-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-pink-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-pink-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-pink-900), <alpha-value>)',
      },
      grape: {
        50: 'rgba(var(--yu-colors-grape-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-grape-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-grape-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-grape-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-grape-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-grape-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-grape-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-grape-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-grape-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-grape-900), <alpha-value>)',
      },
      violet: {
        50: 'rgba(var(--yu-colors-violet-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-violet-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-violet-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-violet-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-violet-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-violet-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-violet-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-violet-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-violet-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-violet-900), <alpha-value>)',
      },
      indigo: {
        50: 'rgba(var(--yu-colors-indigo-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-indigo-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-indigo-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-indigo-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-indigo-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-indigo-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-indigo-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-indigo-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-indigo-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-indigo-900), <alpha-value>)',
      },
      blue: {
        50: 'rgba(var(--yu-colors-blue-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-blue-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-blue-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-blue-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-blue-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-blue-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-blue-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-blue-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-blue-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-blue-900), <alpha-value>)',
      },
      cyan: {
        50: 'rgba(var(--yu-colors-cyan-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-cyan-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-cyan-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-cyan-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-cyan-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-cyan-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-cyan-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-cyan-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-cyan-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-cyan-900), <alpha-value>)',
      },
      teal: {
        50: 'rgba(var(--yu-colors-teal-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-teal-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-teal-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-teal-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-teal-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-teal-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-teal-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-teal-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-teal-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-teal-900), <alpha-value>)',
      },
      green: {
        50: 'rgba(var(--yu-colors-green-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-green-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-green-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-green-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-green-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-green-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-green-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-green-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-green-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-green-900), <alpha-value>)',
      },
      lime: {
        50: 'rgba(var(--yu-colors-lime-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-lime-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-lime-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-lime-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-lime-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-lime-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-lime-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-lime-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-lime-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-lime-900), <alpha-value>)',
      },
      yellow: {
        50: 'rgba(var(--yu-colors-orange-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-orange-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-orange-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-orange-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-orange-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-orange-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-orange-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-orange-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-orange-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-orange-900), <alpha-value>)',
      },
      orange: {
        50: 'rgba(var(--yu-colors-orange-50), <alpha-value>)',
        100: 'rgba(var(--yu-colors-orange-100), <alpha-value>)',
        200: 'rgba(var(--yu-colors-orange-200), <alpha-value>)',
        300: 'rgba(var(--yu-colors-orange-300), <alpha-value>)',
        400: 'rgba(var(--yu-colors-orange-400), <alpha-value>)',
        500: 'rgba(var(--yu-colors-orange-500), <alpha-value>)',
        600: 'rgba(var(--yu-colors-orange-600), <alpha-value>)',
        700: 'rgba(var(--yu-colors-orange-700), <alpha-value>)',
        800: 'rgba(var(--yu-colors-orange-800), <alpha-value>)',
        900: 'rgba(var(--yu-colors-orange-900), <alpha-value>)',
      },
      layer: 'rgba(var(--yu-colors-layer), <alpha-value>)',
      'layer-hover': 'rgba(var(--yu-colors-layer-hover), <alpha-value>)',
      'layer-light': 'rgba(var(--yu-colors-layer-light), <alpha-value>)',
      'layer-light-hover':
        'rgba(var(--yu-colors-layer-light-hover), <alpha-value>)',
    },
    variables: {
      DEFAULT: {
        colors: {
          dark: {
            50: '193, 194, 197',
            100: '166, 167, 171',
            200: '144, 146, 150',
            300: '92, 95, 102',
            400: '55, 58, 64',
            500: '44, 46, 51',
            600: '37, 38, 43',
            700: '26, 27, 30',
            800: '20, 21, 23',
            900: '16, 17, 19',
          },
          gray: {
            50: '248, 249, 250',
            100: '241, 243, 245',
            200: '233, 236, 239',
            300: '222, 226, 230',
            400: '206, 212, 218',
            500: '173, 181, 189',
            600: '134, 142, 150',
            700: '73, 80, 87',
            800: '52, 58, 64',
            900: '33, 37, 41',
          },
          red: {
            50: '255, 245, 245',
            100: '255, 227, 227',
            200: '255, 201, 201',
            300: '255, 168, 168',
            400: '255, 135, 135',
            500: '255, 107, 107',
            600: '250, 82, 82',
            700: '240, 62, 62',
            800: '224, 49, 49',
            900: '201, 42, 42',
          },
          pink: {
            50: '255, 240, 246',
            100: '255, 222, 235',
            200: '252, 194, 215',
            300: '250, 162, 193',
            400: '247, 131, 172',
            500: '240, 101, 149',
            600: '230, 73, 128',
            700: '214, 51, 108',
            800: '194, 37, 92',
            900: '166, 30, 77',
          },
          grape: {
            50: '248, 240, 252',
            100: '243, 217, 250',
            200: '238, 190, 250',
            300: '229, 153, 247',
            400: '218, 119, 242',
            500: '204, 93, 232',
            600: '190, 75, 219',
            700: '174, 62, 201',
            800: '156, 54, 181',
            900: '134, 46, 156',
          },
          violet: {
            50: '243, 240, 255',
            100: '229, 219, 255',
            200: '208, 191, 255',
            300: '177, 151, 252',
            400: '151, 117, 250',
            500: '132, 94, 247',
            600: '121, 80, 242',
            700: '112, 72, 232',
            800: '103, 65, 217',
            900: '95, 61, 196',
          },
          indigo: {
            50: '237, 242, 255',
            100: '219, 228, 255',
            200: '186, 200, 255',
            300: '145, 167, 255',
            400: '116, 143, 252',
            500: '92, 124, 250',
            600: '76, 110, 245',
            700: '66, 99, 235',
            800: '59, 91, 219',
            900: '54, 79, 199',
          },
          blue: {
            50: '231, 245, 255',
            100: '208, 235, 255',
            200: '165, 216, 255',
            300: '116, 192, 252',
            400: '77, 171, 247',
            500: '51, 154, 240',
            600: '34, 139, 230',
            700: '28, 126, 214',
            800: '25, 113, 194',
            900: '24, 100, 171',
          },
          cyan: {
            50: '227, 250, 252',
            100: '197, 246, 250',
            200: '153, 233, 242',
            300: '102, 217, 232',
            400: '59, 201, 219',
            500: '34, 184, 207',
            600: '21, 170, 191',
            700: '16, 152, 173',
            800: '12, 133, 153',
            900: '11, 114, 133',
          },
          teal: {
            50: '230, 252, 245',
            100: '195, 250, 232',
            200: '150, 242, 215',
            300: '99, 230, 190',
            400: '56, 217, 169',
            500: '32, 201, 151',
            600: '18, 184, 134',
            700: '12, 166, 120',
            800: '9, 146, 104',
            900: '8, 127, 91',
          },
          green: {
            50: '235, 251, 238',
            100: '211, 249, 216',
            200: '178, 242, 187',
            300: '140, 233, 154',
            400: '105, 219, 124',
            500: '81, 207, 102',
            600: '64, 192, 87',
            700: '55, 178, 77',
            800: '47, 158, 68',
            900: '43, 138, 62',
          },
          lime: {
            50: '244, 252, 227',
            100: '233, 250, 200',
            200: '216, 245, 162',
            300: '192, 235, 117',
            400: '169, 227, 75',
            500: '148, 216, 45',
            600: '130, 201, 30',
            700: '116, 184, 22',
            800: '102, 168, 15',
            900: '92, 148, 13',
          },
          yellow: {
            50: '255, 249, 219',
            100: '255, 243, 191',
            200: '255, 236, 153',
            300: '255, 224, 102',
            400: '255, 212, 59',
            500: '252, 196, 25',
            600: '250, 176, 5',
            700: '245, 159, 0',
            800: '240, 140, 0',
            900: '230, 119, 0',
          },
          orange: {
            50: '255, 244, 230',
            100: '255, 232, 204',
            200: '255, 216, 168',
            300: '255, 192, 120',
            400: '255, 169, 77',
            500: '255, 146, 43',
            600: '253, 126, 20',
            700: '247, 103, 7',
            800: '232, 89, 12',
            900: '217, 72, 15',
          },
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')({
      variablePrefix: 'yu',
    }),
  ],
};
