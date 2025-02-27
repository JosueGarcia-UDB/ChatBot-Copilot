
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Chatbot UDB</title>
        <meta name="description" content="Chatbot de la Universidad Don Bosco" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}