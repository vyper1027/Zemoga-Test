import React,{Component}  from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import './css/Styles.css';

import Players from './components/Players'
import pope from './graphs/pope.png'
import popedata from './graphs/pope-data.png'
import kanye from './graphs/kanye.png'
import mark from './graphs/mark.png'
import cristina from './graphs/cristina.png'
import malala from './graphs/malala.png'
import tup from './graphs/up.png'
import tdown from './graphs/down.png'

import { Accordion, AccordionItem, AccordionTitle, AccordionContent } from './components/accordion';
import { Badge } from './components/badge';
import { Breadcrumbs, BreadcrumbItem } from './components/breadcrumbs';
import { Button, Link } from './components/button';
import { ButtonGroup } from './components/button-group';
import { Callout } from './components/callout';
import { CloseButton } from './components/close-button';
import { Reveal } from './components/reveal';
import { FlexVideo } from './components/flex-video';
import { Row, Column } from './components/grid';
import { Block, Inline } from './components/element';
import { Icon } from './components/icon';
import { Label } from './components/label';
import { MediaObject, MediaObjectSection } from './components/media-object';
import { Menu, MenuItem, MenuText } from './components/menu';
import { Pagination, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from './components/pagination';
import { Progress, ProgressMeter, ProgressMeterWithText, ProgressMeterText, NativeProgress } from './components/progress-bar';
import { ResponsiveNavigation, TitleBar, MenuIcon, TitleBarTitle } from './components/responsive';
import { Switch, SwitchInput, SwitchPaddle, SwitchActive, SwitchInactive } from './components/switch';
import { Thumbnail, ThumbnailLink } from './components/thumbnail';
import { Tabs, TabItem, TabsContent, TabPanel } from './components/tabs';
import { TopBar, TopBarTitle, TopBarLeft, TopBarRight } from './components/top-bar';
import { GridContainer, Grid, Cell } from './components/xy-grid';
import { Breakpoints, Colors, Sizes, Alignments, FloatTypes, InputTypes, GutterTypes, ExtendedBreakpoints, SpaceControls } from './enums';

import  Votes  from './components/votes';
function App() {
  return (
    <div class="App">
      <Grid class="display">
      <header class="App-header">
      <h3 class="title-bar-left">Rule of Thumb.</h3>  
      <div class="pages" >        
            <a class="references" href="#">Past Trials</a>
            <a class="references" href="#">How It Works</a>
            <a class="references" href="#">Log In / Sign Up</a>
      </div>     
        <div class="top-bar"> 
        </div>

        <img src={popedata} id="popedata"  alt="popedata" />

        <Cell class="row" small={12} large={12}>      
          <img src={pope} id="pope" class="headerimage" alt="pope" /> 
          <div></div>
        </Cell>  

        <Cell class="row" small={12} large={12}>
        Closing In
        </Cell>
        
        <Cell id="midtext" small={12} large={8}>
          <p id="text1">Speak out. Be heard.<p id="text2">Be Counted</p>
          </p>
          
          <p id="text3">Rule of Thumb is a crowd sorced court of public 
            opinion where anyone and everyone can speak  out
            and speak freely.It's easy: You share your opinion, 
            we analye and put the data in a public report. </p>
        
        </Cell>
        <p id="text4">Votes</p>
      </header>  
          
          <Cell class="row" small={12} large={6}>
            <strong class="imageName" id="n_kanye">kanye West</strong>
            <small class="timeElapsed" id="te_kanye">1 month ago</small>
            <small class="guild" id="g_kanye">in Entertainment</small>                         
            <img src={kanye} class="Person" alt="kanye" />
            <img src={tup} class="thumbs" id="thumbup" />
            <img src={tdown} class="thumbs" id="thumbdown"  />
          </Cell>

          <Cell class="row" small={12} large={6}>
            <strong class="imageName" id="n_mark">Mark Zuckerberg</strong>
            <small class="timeElapsed" id="te_mark">1 month ago</small>
            <small class="guild" id="n_mark">in Business</small> 
            <img src={mark} class="Person" alt="mark" />
            <img src={tup} class="thumbs" id="thumbup"  />
            <img src={tdown} class="thumbs" id="thumbdown"  />
          </Cell>
      
          <Cell class="row" small={12} large={6}>
            <strong class="imageName" id="n_cristina">Cristina Fernández de Kirchner</strong>
            <small class="timeElapsed" id="te_">1 month ago</small>
            <small class="guild" id="n_kanye">in Politics</small> 
            <img src={cristina} class="Person" alt="cristina" />
            <img src={tup} class="thumbs" id="thumbup"  />
            <img src={tdown} class="thumbs" id="thumbdown"  />
          </Cell>

          <Cell class="row" small={12} large={6}>
            <strong class="imageName" id="n_malala">Malala Yousafzai</strong>
            <small class="timeElapsed" id="n_kanye">1 month ago</small>
            <small class="guild" id="n_kanye">in Entertainment</small>           
            <img src={malala} class="Person" alt="malala" />
            <img src={tup} class="thumbs" id="thumbup" alt="thumbsup" />
            <img src={tdown} class="thumbs" id="thumbdown" alt="thumbsdown" />
            <Votes />
          </Cell>	
          

      </Grid>
    </div>
  
  );
}

export default App;
