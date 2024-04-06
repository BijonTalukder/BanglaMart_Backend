import mongoose from 'mongoose';
import { Dotconfig } from './utility/config';
import app from './app';



async function main() {

    try {
      // console.log(Dotconfig.DataBaseUrl,process.env.DATABASE_URL)
        await mongoose.connect(Dotconfig.DataBaseUrl as string);
        console.log(`🛢   Database is connected successfully`);
        app.listen(Dotconfig.Port, () => {
          console.log(`Application app listening on port ${Dotconfig.Port}`)
        })
        
    } catch (error) {
      console.log(error)
        
    }



  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()