import { Inter } from 'next/font/google';
import { Providers } from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] })
import '/public/assets/css/app.css'
import '/public/assets/css/theme.css'
import '/public/assets/css/card.css'
import '/public/assets/css/comment.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PicFeed: The magic of the Internet</title>

      {/* <link rel="stylesheet" href="../assets/css/app.css" />
      <link rel="stylesheet" href="../assets/css/theme.css" />
      <link rel="stylesheet" href="../assets/css/card.css" />
      <link rel="stylesheet" href="../assets/css/comment.css" /> */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <script defer  src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

      <script defer  src="https://use.fontawesome.com/fe459689b4.js"></script>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

    </head>
    <body className={inter.className}>
      <Providers>
      {children}
      </Providers>
      <script defer  src="../assets/js/app.js"></script>
      <script defer  src="../assets/js/theme.js"></script>



      <script defer  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      </body>
  </html>
  )
}