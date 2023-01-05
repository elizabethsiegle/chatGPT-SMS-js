# chatGPT-SMS

Use ChatGPT without the browser! Text +17622490430.
![image](https://user-images.githubusercontent.com/8932430/210679442-9c740918-d31b-48ee-b936-6d50a829c830.png)


You'll need an OpenAI API Key. You can [get one here](https://beta.openai.com/account/api-keys) by clicking on `+ Create new secret key`.
![image](https://user-images.githubusercontent.com/8932430/210679481-f28e7deb-94c0-4bd1-8ae5-a30a40c83584.png)

## Set an Environment Variable with Twilio Functions and Assets
Open up your `.env file` for your Functions project in your root directory and add the following line:

```bash
OPENAI_API_KEY=YOUR-OPENAI-API-KEY
```
Now you can access this API Key if you'd like to do so in your code with `context.OPENAI_API_KEY`.

## Configure the Serverless Function with a Twilio Phone Number

To open up our app to the web with a public-facing URL, run `twilio serverless:deploy` from the root directory.
![image](https://user-images.githubusercontent.com/8932430/210679657-5fe03667-35fe-4562-8fa3-2c8da685245d.png)
Grab the Function URL corresponding to your app (the one that ends with `/chatgpt`) and [configure a Twilio phone number](https://www.google.com/url?q=https://www.twilio.com/console/phone-numbers/incoming&sa=D&source=editors&ust=1672884776711184&usg=AOvVaw3wjORqsU1VSnRNp5fXjwn2) with it as shown below: select a Twilio number you purchased in your Twilio phone numbers console and scroll down to the `Messaging` section. Paste the link in the text field for `A MESSAGE COMES IN` webhook making sure that it's set to `HTTP POST`. When you click `Save` it should look like this!
![image](https://user-images.githubusercontent.com/8932430/210679812-3d6c91a5-4045-4c08-bdef-e2b9da43e6f1.png)

Now take out your phone and text a question or prompt to your Twilio number.
![image](https://user-images.githubusercontent.com/8932430/210679847-6ab42526-7925-404e-8770-90f25e960538.png)

