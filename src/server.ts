import app from "./app";

const PORT = 5000;

async function bootstrap() {
  const server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.info("Server closed");
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
    exitHandler();
  };

  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);
}

bootstrap();
