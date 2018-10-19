# _BetterDoctor API Query_

#### _Week 12 Independent Project for Epicodus, 10.19.2018_

#### By _**Catherine Bradley**_

## Description

_BetterDoctor API Query uses BetterDoctor API (https://developer.betterdoctor.com/) to find doctors based on health issue (ex: back pain, toothache, cold) or by doctor first and last name. This search is limited to the Seattle, WA area._

### Specifications

* Example Input(health issue): _'back pain'_
* Example Output:
_Christopher Varley_<br/>
_Seattle Childrens_<br/>
_Address: 4800 Sand Point Way NE_<br/>
_Seattle, Washington 98105_<br/>
_Number: 2069872078 Type: landline_<br/>
_Website: http://www.seattlechildrens.org/medical-staff/jonathan-peter-lopez/_<br/>
_Accepts new patients? true_<br/>

_Followed by a continued list of other doctors, who treat back pain, displayed in this format._

## Setup/Installation Requirements

* _Clone this repository_
* _Create an account with BetterDoctor https://developer.betterdoctor.com/_ and obtain an API key._
* _copy/paste your API in the .env file, located in the root directory. EX: exports.apiKey=[YOUR API KEY]_

## Known Bugs / Assumptions

* _program has confusing results for user. Each query returns the same doctor multiple times but with different addresses_
* _Accepting new patients returns true or false instead of yes or no_
* _If no website is listed, results return undefined_

## Support and contact details

_For feedback, please contact Catherine Bradley at catherinetybradley@gmail.com_

## Technologies Used

* _JavaScript_
* _NPM_
* _Jasmine_
* _Karma_

### Legal

*NA*
