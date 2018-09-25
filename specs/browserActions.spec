#Browser Action

## Switch To
* Intercept Google Analytics
* Navigate to "https://gauge.org"
* Click link to left of

   |Type|Selector    |
   |----|------------|
   |text|Plugins     |

* Switch to tab with title "Open Source Test Automation Framework | Gauge"
* Assert Exists

   |Type|Selector    |
   |----|------------|
   |$   |.github_star|

## Open/Close Tab
* Intercept Google Analytics
* Navigate to "google.com"
* Open Tab "https://gauge.org"
* Close Tab "https://gauge.org"

## Close Tab with no parameters
* Intercept Google Analytics
* Navigate to "google.com"
* Open Tab "https://www.thoughtworks.com/contact-us" with timeout "20000"
* Click link below 

   |Type|Selector                                   |
   |----|-------------------------------------------|
   |text|contains("I agree to share my information")|
* Close Tab
* Close Tab
* Switch to tab with title "Google"
