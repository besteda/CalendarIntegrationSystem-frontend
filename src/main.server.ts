import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app/app.config.server';
import { AppModule } from './app/app/app.module';
import { environment } from './environments/environment.development';


// API URL'sini environment dosyasından al
const apiUrl = environment.apiUrl;

const bootstrap = () => bootstrapApplication(AppModule, config);

export default bootstrap;