import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://musicApp:<appId>@cluster0.qkq4ien.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
