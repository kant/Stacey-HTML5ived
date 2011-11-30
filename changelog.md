# STACEY HTML5IVED CHANGELOG

# Version 1

General Changes
---------------

* added 'silence' index.php within directories
* added favicon (link currently commented out)
* implemented CSS with SASS / Compass
 * includes 'color', 'common' and reset base files


'content' directory
-------------------

* _shared.txt
 * changed @profession to @tagline
 * added @content_entity variable (used place of 'Project' through-out site; e.g. if want to change from Project to 'Article')
* renamed '2.contact-me' to '4.contact'
* renamed '4.projects' to '4.articles'
* added 'drafts' directory


'public' directory
------------------

### '404.html'

* updated to html5 markup
* changed *h2* to *p* with *strong*

### 'docs' directory

#### 'css' directory

* reset browser default styles (source within SASS files)
* updated screen.css to match new markup to original layout
 * some small deviations from original layout to align baselines and/or layouts between pages
 * made layout percentage based with max-width
 * TODO: make image / gallery size fluid
* added print.css

#### 'js' directory

* updated jQuery (1.6.4)
* added modernizr.js (2.0.6)
* added selectivizr.js (1.0.2)
* added site.js
* updated init-gallery.js to match markup changes
	removed 'a' from #next-image and #previous-image
	changed reference to #project-count to #entity-count


'templates' directory
---------------------

### General Changes

* converted head and footer into partials
* updated markup to HTML5 where possible and appropriate (e.g. head; navigation)
* removed .col layout classes
* removed *hr* elements
* renamed div#container to section#content

### Individual Template Updates

#### All Templates

* simplified with new head and foot partials

#### 'page.html'

* renamed p.date changed to p.paragraph_mark
* removed inner *a* from .description h2
* changed div.description to section.content-primary

#### 'project.html'

* removed outer wrapping #container
* removed inner *a* (linked to root) from .description h2
* changed div.description to section.content-primary
* renamed 'next/previous page' wrapping div to #entity-navigation
* changed #next-image & #previous-image from empty (no href) *a* element to *span*
* added wrapping section#media-gallery and heading to gallery navigation
* changed #project-count to #entity-count
 * TODO: check if gallery navigation needed in markup when not being used

### 'partials' directory

#### created 'common' directory

* added 'head.html' partial
 * added IE conditional classes to html element (paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/)
 * added modernizr.js link
 * added print stylesheet
 * versioned CSS links (i.e. screen.css?d=20110319)
 * added favicon link (commented out)
 * added apple-touch-icon link (commented out)
 * changed @profession to @tagline (per change in _shared.txt)
 * added header#site-header wrapping element
 * added conditional tests around @tagline & @email
 * moved @email to foot.html
 * moved :navigation to foot.html
 * note: one side effect of common head partial is standardized page titles
* added 'foot.html' partial
 * moved @email from head.html
 * moved :navigation from head.html
 * added footer#site-footer wrapping element
 * added 'Site Notes' heading
 * listed footer items within *ul*
 * updated jQuery link
  * loading jQuery via Google CDN with local fallback (html5boilerplate.com)
 * added selectivizr.js (1.0.1)
 * versioned site JS link (i.e. site.jss?d=20110319)
 * note: one side effect of common foot partial is consolidation of JS scripts (i.e. gallery.js, init-gallery.js)

#### 'navigation' directory

* children.html
 * changed *ol* element to *ul*
 * removed .children class
* renamed category-lists.html to category-list.html
* renamed projects-list.html to entity-list.html
* category-list.html
 * renamed ul.projects to ul.entities
 * @date: added conditional test; made inline; added separator
 * removed h2
 * added wrapping *section*
 * added @content_entity as heading
 * changed img.project-thumb to img.entity-thumb
 * replaced inner content with :entity-list include (since duplicate content within foreach $root)
* entity-list.html
 * changed ul.projects to ul.entities
 * changed img.project-thumb to img.entity-thumb
* navigation.html
 * added 'Site Navigation' heading
 * changed ul#navigation to nav#site-navigation
* moved 'next-page.html' and 'previous-page.html' partials within
 * changed next / previous 'project' to @content_entity

#### 'assets' directory

* media.html
 * changed div to *section*
* images.hmtl
 * removed inline 'width' and 'height' attributes to control with CSS instead (for fluidly sized images)
* pdfs.html
 * changed markup to section & list
* swf.html
 * changed div.media to div.swf
* video.html
 * changed div.media to div.video