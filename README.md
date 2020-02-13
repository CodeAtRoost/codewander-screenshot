# codewander-screenshot
screen shot for Qliksense extensions

Takes Screenshot of the entire Qliksense sheet or a specfic chart
Does not work in safari or IE. 

Uses Dom-to-image to take screenshot of the qvobjects and downloads it as PNG.

**Update: 2/13/2020** Fixed the full screen mode bug

**KNOWN LIMITATION: This extension does not work in IE and Safari due to the limitations of dom-to-image library.**

Demo: Screenshot in App: https://www.youtube.com/embed/vi6175O6McM
Demo: Screenshot in Mashup: https://youtu.be/PVgjHb3cN3U

<div style="background-color:green">
<a href="https://github.com/CodeAtRoost/codewander-screenshot/archive/1.1.zip">Download</a>
 </div>

# <h1>Features</h1>
## <h2>Take screenshot of a single chart component (Qliksense Extensions or Native Components)</h2>
<ul>
 	<li>You should see the download a chart icon as part of the extension.</li>
</ul>
<a href="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart.png" target="_blank" rel="noopener"><img class="alignnone wp-image-193 size-large" src="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart-1024x519.png" alt="Codewander.com-Qliksense screenshot extension" width="660" height="335" /></a>
<ul>
 	<li><span style="display: inline !important; float: none; background-color: transparent; color: #23292b; cursor: text; font-family: 'Open Sans',Helvetica,Arial,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">Once you click on the icon, all the chart components will turn into Screen shot mode with buttons on them to "Take Screenshot". The Download a chart button will change to "Eye icon" . Clicking on the "Eye icon" will take you back to normal or view mode.</span></li>
</ul>
<a href="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart_2.png" target="_blank" rel="noopener"><img class="alignnone wp-image-194 size-large" src="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart_2-1024x524.png" alt="" width="660" height="338" /></a>
<ul>
 	<li>Click on the "Take Snapshot" button of a component to download it as PNG. Sometimes the pop-up may blocked. Enable pop-up and try again.</li>
</ul>
<a href="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart_3.png" target="_blank" rel="noopener"><img class="alignnone wp-image-195 size-medium" src="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart_3-300x153.png" alt="Qliksense-screenshot-extension_Download_a_chart_3" width="300" height="153" /></a><a href="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart_4.png" target="_blank" rel="noopener"><img class="alignnone wp-image-196 size-medium" src="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_a_chart_4-300x237.png" alt="Codewander.com-Qliksense-screenshot-extension-Image of the chart" width="300" height="237" /></a>
<h2>Download Full Sheet</h2>
You can download the full sheet by simply clicking on the "Download fullsheet" button either on normal mode or screenshot mode
<h2><a href="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_full_sheet.png" target="_blank" rel="noopener"><img class="alignnone wp-image-198 size-full" src="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_full_sheet.png" alt="Qliksense-screenshot-extension_Download_full_sheet" width="1366" height="700" /></a><a href="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_full_sheet_2.png" target="_blank" rel="noopener"><img class="alignnone wp-image-199 size-full" src="http://www.codewander.com/wp-content/uploads/2018/05/Qliksense-screenshot-extension_Download_full_sheet_2.png" alt="Qliksense-screenshot-extension_Download_full_sheet_2" width="1358" height="768" /></a></h2>
<h1>Include the extension in the mashup</h1>
Include the screenshot extension in the mashup similar to other qlik visualization objects. The basic steps of including a visualization object in the mashup is explained in the Qlik help link <a href="https://help.qlik.com/en-US/sense-developer/April2018/Subsystems/Mashups/Content/Embed/embed-visualizations.htm">Embedding visualizations using capability API</a>
<h1>How to enable screenshots in mashup?</h1>
<h2>Take screenshot of a single chart object</h2>
There is no change to the method of taking screenshot of a single object. However, a new option to set the background color is given. The default color is white and it has to be in hexa color code.

<a href="http://www.codewander.com/wp-content/uploads/2018/05/Qlik-sense-screenshot-extension_coloroption.png"><img class="aligncenter size-full wp-image-289" src="http://www.codewander.com/wp-content/uploads/2018/05/Qlik-sense-screenshot-extension_coloroption.png" alt="Qlik-sense-screenshot-extension_coloroption" width="251" height="116" /></a> <a href="http://www.codewander.com/wp-content/uploads/2018/05/Qlik-sense-screenshot-extension_container-option.png"><img class="aligncenter size-full wp-image-290" src="http://www.codewander.com/wp-content/uploads/2018/05/Qlik-sense-screenshot-extension_container-option.png" alt="Qlik-sense-screenshot-extension_container option" width="246" height="131" /></a>
<h2>Take screen shot of the full page</h2>
There is a new option called Container Identifier. The DOM object element that has the entire page content has to be set here. The default value is ".qvt-sheet". The container can be identified either using the class name or the id name. If its the class name, then it has to preced with a . (dot). If its an id, then the value must precede with a # (hash).

You can generate one copy of the extension for screenshot within the Qlik native app. And another one for the mashups.

<a href="http://www.codewander.com/wp-content/uploads/2018/05/Qlik-sense-screenshot-extension_container-option.png"><img class="aligncenter size-full wp-image-290" src="http://www.codewander.com/wp-content/uploads/2018/05/Qlik-sense-screenshot-extension_container-option.png" alt="Qlik-sense-screenshot-extension_container option" width="246" height="131" /></a>
<h3>Grouping a visualizations in the mashup</h3>
If you like to take screenshots by each section in the mashup, you can identify all those sections with a specific class name. Doing so, the extension will create separate screenshots for each sections, all at once.
<h3>Download all visualizations at once, separately</h3>
If you like to download all visualization separately all at once, you can set the class name to ".qv-object"



<h2>Remove Watermark</h2>
If needed, you can remove watermark from the code. If you have any difficulty doing so, please drop a note at codeatroost@gmail.com.

&nbsp;

&nbsp;

&nbsp;
