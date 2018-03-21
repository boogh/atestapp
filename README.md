


#Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

#Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references


## Setup Instructions

### Steps
1. Deploy the fulfillment webhook provided in the functions folder using [Google Cloud Functions for Firebase](https://firebase.google.com/docs/functions/):
   1. Follow the instructions to [set up and initialize Firebase SDK for Cloud Functions](https://firebase.google.com/docs/functions/get-started#set_up_and_initialize_functions_sdk). Make sure to select the project that you have previously generated in the Actions on Google Console and to reply `N` when asked to overwrite existing files by the Firebase CLI.
   2. Navigate to the <code>firebase/functions</code> directory and run <code>npm install</code>.
   3. Run `firebase deploy --only functions` and take note of the endpoint where the fulfillment webhook has been published. It should look like `Function URL (yourAction): https://${REGION}-${PROJECT}.cloudfunctions.net/yourAction`
   


#Build and Test
TODO: Describe and show how to build your code and run the tests. 

#Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://www.visualstudio.com/en-us/docs/git/create-a-readme). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)