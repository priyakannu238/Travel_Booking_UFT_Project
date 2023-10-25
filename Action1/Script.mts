'The site is opened using chrome 
SystemUtil.Run "chrome.exe","https://www.travelyaari.com/"

'Starting city is set as Pune and destination city is set as mumbai
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebEdit("Starting city").Click
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebElement("Pune").Click
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebEdit("Destination city").Click
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebElement("Mumbai").Click

'the following present date is choosen 
Browser("Pune To Mumbai Online").Page("Bus Ticket Booking Online,").WebEdit("Choose departure date").Click
Browser("Pune To Mumbai Online").Page("Bus Ticket Booking Online,").WebTable("Sun").Click
Browser("Pune To Mumbai Online").Page("Bus Ticket Booking Online,").WebButton("1").Click

'The departure date is choosen as 12th of april
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebEdit("Choose date(Optional)").Click
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebTable("Sun").Click
Browser("Pune To Mumbai Online_3").Page("Bus Ticket Booking Online,").WebButton("12").Click

 @@ script infofile_;_ZIP::ssf17.xml_;_
'Search button is clicked in order to search the busses
Browser("Bus Ticket Booking Online,").Page("Bus Ticket Booking Online,").WebButton("Search Bus").Click

'Condition 1 the price range is set less than 1000
Browser("Pune To Mumbai Online_2").Page("Pune To Mumbai Online").WebElement("Price").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Pune To Mumbai Online").Page("Pune To Mumbai Online").WebNumber("max price").Set "999"
Browser("Pune To Mumbai Online").Page("Pune To Mumbai Online").WebNumber("min price").Set "0"

'Condition 2 the seater/semi sleeper option is selected
Browser("Pune To Mumbai Online").Page("Pune To Mumbai Online").WebElement("APPLY FILTERS").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Pune To Mumbai Online").Page("Pune To Mumbai Online").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Pune To Mumbai Online").Page("Pune To Mumbai Online").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Pune To Mumbai Online").Page("Pune To Mumbai Online").WebElement("APPLY FILTERS").Click @@ script infofile_;_ZIP::ssf12.xml_;_

'For the conditions above there are no busses available so the 'no search results available " is verified using checkpoint and its output value is stored and displayed in output console
Browser("Pune To Mumbai Online_3").Page("Pune To Mumbai Online").WebElement("No results found").Output CheckPoint("No results found") @@ script infofile_;_ZIP::ssf15.xml_;_
Print DataTable.Value ("No results found_innertext_out","Global")

Browser("Pune To Mumbai Online_4").Close @@ hightlight id_;_263588_;_script infofile_;_ZIP::ssf16.xml_;_

'Code will correctly work until 12th of april, after that the dates should be added in the code using object repository @@ script infofile_;_ZIP::ssf6.xml_;_
