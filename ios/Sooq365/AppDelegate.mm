#import "AppDelegate.h"
// #import <Firebase.h>
// #import "RNSplashScreen.h"  // here
#import <CodePush/CodePush.h>

#import <React/RCTBundleURLProvider.h>
#import <AuthenticationServices/AuthenticationServices.h> 
#import <SafariServices/SafariServices.h> 
// #import <FBSDKCoreKit/FBSDKCoreKit-Swift.h>
#import <React/RCTLinkingManager.h> 

@implementation AppDelegate

- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  // if ([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]) {
  //   return YES;
  // }

  if ([RCTLinkingManager application:app openURL:url options:options]) {
    return YES;
  }

  return NO;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // [FIRApp configure];
  self.moduleName = @"Sooq365";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  bool didFinish=[super application:application didFinishLaunchingWithOptions:launchOptions];
  // [RNSplashScreen show];  // here
  // [FBSDKApplicationDelegate.sharedInstance initializeSDK];
  return didFinish;
}
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
