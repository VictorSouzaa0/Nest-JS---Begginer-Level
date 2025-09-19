import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Set Swagger on the application
  const config = new DocumentBuilder()
    .setTitle('Cars exemple')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cars')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  // 'docs' your endpoint
  SwaggerModule.setup('docs',app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
