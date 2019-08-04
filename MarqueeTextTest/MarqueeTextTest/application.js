//# sourceURL=application.js

//
//  application.js
//  MarqueeTextTest
//
//

/*
 * This file provides an example skeletal stub for the server-side implementation 
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is 
 * configured in the AppDelegate of the TVML application. Note that  the various 
 * javascript functions here are referenced by name in the AppDelegate. This skeletal 
 * implementation shows the basic entry points that you will want to handle 
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript 
 * has been parsed into a JavaScript context. The handler is passed an object 
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the 
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents 
 * the URL that was used to retrieve the application JavaScript.
 */
App.onLaunch = function(options) {
    var stack = createStackTemplate("Example Lockups");
    navigationDocument.pushDocument(stack);
}


App.onWillResignActive = function() {

}

App.onDidEnterBackground = function() {

}

App.onWillEnterForeground = function() {
    
}

App.onDidBecomeActive = function() {
    
}

App.onWillTerminate = function() {
    
}


/**
 * This convenience funnction returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <alertTemplate>
            <title>${title}</title>
            <description>${description}</description>
          </alertTemplate>
        </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}

var createStackTemplate = function(title, description) {
    var stackXML =
    `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
        <stackTemplate>
            <banner>
            <title>${title}</title>
            </banner>
            <collectionList>
                <grid>
                    <section>
                        <lockup>
                            <img width="308" height="308" style="tv-placeholder: music;"/>
                            <title>Short Title</title>
                        </lockup>
                        <lockup id="longTitleLockup">
                            <img width="308" height="308" style="tv-placeholder: music;" />
                            <title>Long Title Lockup With Long Title</title>
                        </lockup>
                        <lockup>
                            <img width="308" height="308" style="tv-placeholder: music;"/>
                            <title>Long Title With Working Marquee</title>
                        </lockup>
                    </section>
                </grid>
            </collectionList>
        </stackTemplate>
    </document>`
    
    var parser = new DOMParser();
    var stackDoc = parser.parseFromString(stackXML, "application/xml");
   
    var lockup1 = stackDoc.getElementById("longTitleLockup");
    lockup1.addEventListener("highlight", updateAttribute);
    return stackDoc
}

var updateAttribute = (event) => {
    var doc = getActiveDocument();
    var lockup = doc.getElementById("longTitleLockup");
    var img = lockup.getElementsByTagName("img").item(0);
    lockup.setAttribute("AnyAttribute", "AnyValue");
    
};
