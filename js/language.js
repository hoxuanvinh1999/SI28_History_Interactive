var language = 0;

//get element for change
const winverBody = document.getElementById('winverBody');
const souvenir_1 = document.getElementById('souvenir_1');
const souvenir_2 = document.getElementById('souvenir_2');
const souvenir_3 = document.getElementById('souvenir_3');
const souvenir_4 = document.getElementById('souvenir_4');
const souvenir_5 = document.getElementById('souvenir_5');
const souvenir_6 = document.getElementById('souvenir_6');

const photo1_souvenir_1 = document.getElementById('photo1_souvenir_1');
const photo2_souvenir_1 = document.getElementById('photo2_souvenir_1');
const photo3_souvenir_1 = document.getElementById('photo3_souvenir_1');
const photo4_souvenir_1 = document.getElementById('photo4_souvenir_1');
const photo5_souvenir_1 = document.getElementById('photo5_souvenir_1');
const photo6_souvenir_1 = document.getElementById('photo6_souvenir_1');
const photo7_souvenir_1 = document.getElementById('photo7_souvenir_1');
const photo8_souvenir_1 = document.getElementById('photo8_souvenir_1');

const photo1_souvenir_2 = document.getElementById('photo1_souvenir_1');
const photo2_souvenir_2 = document.getElementById('photo2_souvenir_2');
const photo3_souvenir_2 = document.getElementById('photo3_souvenir_2');
const photo4_souvenir_2 = document.getElementById('photo4_souvenir_2');
const photo5_souvenir_2 = document.getElementById('photo5_souvenir_2');
const photo6_souvenir_2 = document.getElementById('photo6_souvenir_2');
const photo7_souvenir_2 = document.getElementById('photo7_souvenir_2');

const result_souvenir_2 = document.getElementById('result_souvenir_2');

const photo1_souvenir_3 = document.getElementById('photo1_souvenir_3');
const photo2_souvenir_3 = document.getElementById('photo2_souvenir_3');
const photo3_souvenir_3 = document.getElementById('photo3_souvenir_3');
const photo4_souvenir_3 = document.getElementById('photo4_souvenir_3');
const photo5_souvenir_3 = document.getElementById('photo5_souvenir_3');
const photo6_souvenir_3 = document.getElementById('photo6_souvenir_3');
const photo7_souvenir_3 = document.getElementById('photo7_souvenir_3');
const photo8_souvenir_3 = document.getElementById('photo8_souvenir_3');
const photo9_souvenir_3 = document.getElementById('photo9_souvenir_3');
const photo10_souvenir_3 = document.getElementById('photo10_souvenir_3');
const photo11_souvenir_3 = document.getElementById('photo11_souvenir_3');
const photo12_souvenir_3 = document.getElementById('photo12_souvenir_3');
const photo13_souvenir_3 = document.getElementById('photo13_souvenir_3');

const photo1_souvenir_4 = document.getElementById('photo1_souvenir_4');
const photo2_souvenir_4 = document.getElementById('photo2_souvenir_4');
const photo3_souvenir_4 = document.getElementById('photo3_souvenir_4');
const photo4_souvenir_4 = document.getElementById('photo4_souvenir_4');
const photo5_souvenir_4 = document.getElementById('photo5_souvenir_4');
const photo6_souvenir_4 = document.getElementById('photo6_souvenir_4');
const photo7_souvenir_4 = document.getElementById('photo7_souvenir_4');
const photo8_souvenir_4 = document.getElementById('photo8_souvenir_4');

const photo1_souvenir_5 = document.getElementById('photo1_souvenir_5');
const photo2_souvenir_5 = document.getElementById('photo2_souvenir_5');
const photo3_souvenir_5 = document.getElementById('photo3_souvenir_5');
const photo4_souvenir_5 = document.getElementById('photo4_souvenir_5');
const photo5_souvenir_5 = document.getElementById('photo5_souvenir_5');

const npTextarea_readme_souvenir_1 = document.getElementById('npTextarea_readme_souvenir_1');
const npTextarea_readme_souvenir_2 = document.getElementById('npTextarea_readme_souvenir_2');
const npTextarea_readme_souvenir_3 = document.getElementById('npTextarea_readme_souvenir_3');
const npTextarea_readme_souvenir_3_2 = document.getElementById('npTextarea_readme_souvenir_3_2');
const npTextarea_readme_souvenir_4 = document.getElementById('npTextarea_readme_souvenir_4');
const npTextarea_readme_souvenir_5 = document.getElementById('npTextarea_readme_souvenir_5');

const npTextarea_code_souvenir_1 = document.getElementById('npTextarea_code_souvenir_1');
const npTextarea_code_souvenir_2 = document.getElementById('npTextarea_code_souvenir_2');
const npTextarea_code_souvenir_3 = document.getElementById('npTextarea_code_souvenir_3');
const npTextarea_code_souvenir_3_2 = document.getElementById('npTextarea_code_souvenir_3_2');
const npTextarea_code_souvenir_4 = document.getElementById('npTextarea_code_souvenir_4');
const npTextarea_code_souvenir_5 = document.getElementById('npTextarea_code_souvenir_5');

const title_photo1_souvenir_1 = document.getElementById('title_photo1_souvenir_1');
const title_photo2_souvenir_1 = document.getElementById('title_photo2_souvenir_1');
const title_photo3_souvenir_1 = document.getElementById('title_photo3_souvenir_1');
const title_photo4_souvenir_1 = document.getElementById('title_photo4_souvenir_1');
const title_photo5_souvenir_1 = document.getElementById('title_photo5_souvenir_1');
const title_photo6_souvenir_1 = document.getElementById('title_photo6_souvenir_1');
const title_photo7_souvenir_1 = document.getElementById('title_photo7_souvenir_1');
const title_photo8_souvenir_1 = document.getElementById('title_photo8_souvenir_1');

const title_photo1_souvenir_2 = document.getElementById('title_photo1_souvenir_2');
const title_photo2_souvenir_2 = document.getElementById('title_photo2_souvenir_2');
const title_photo3_souvenir_2 = document.getElementById('title_photo3_souvenir_2');
const title_photo4_souvenir_2 = document.getElementById('title_photo4_souvenir_2');
const title_photo5_souvenir_2 = document.getElementById('title_photo5_souvenir_2');
const title_photo6_souvenir_2 = document.getElementById('title_photo6_souvenir_2');
const title_photo7_souvenir_2 = document.getElementById('title_photo7_souvenir_2');

const title_photo1_souvenir_3 = document.getElementById('title_photo1_souvenir_3');
const title_photo2_souvenir_3 = document.getElementById('title_photo2_souvenir_3');
const title_photo3_souvenir_3 = document.getElementById('title_photo3_souvenir_3');
const title_photo4_souvenir_3 = document.getElementById('title_photo4_souvenir_3');
const title_photo5_souvenir_3 = document.getElementById('title_photo5_souvenir_3');
const title_photo6_souvenir_3 = document.getElementById('title_photo6_souvenir_3');
const title_photo7_souvenir_3 = document.getElementById('title_photo7_souvenir_3');
const title_photo8_souvenir_3 = document.getElementById('title_photo8_souvenir_3');
const title_photo9_souvenir_3 = document.getElementById('title_photo9_souvenir_3');
const title_photo10_souvenir_3 = document.getElementById('title_photo10_souvenir_3');
const title_photo11_souvenir_3 = document.getElementById('title_photo11_souvenir_3');
const title_photo12_souvenir_3 = document.getElementById('title_photo12_souvenir_3');
const title_photo13_souvenir_3 = document.getElementById('title_photo13_souvenir_3');

const title_photo1_souvenir_4 = document.getElementById('title_photo1_souvenir_4');
const title_photo2_souvenir_4 = document.getElementById('title_photo2_souvenir_4');
const title_photo3_souvenir_4 = document.getElementById('title_photo3_souvenir_4');
const title_photo4_souvenir_4 = document.getElementById('title_photo4_souvenir_4');
const title_photo5_souvenir_4 = document.getElementById('title_photo5_souvenir_4');
const title_photo6_souvenir_4 = document.getElementById('title_photo6_souvenir_4');
const title_photo7_souvenir_4 = document.getElementById('title_photo7_souvenir_4');
const title_photo8_souvenir_4 = document.getElementById('title_photo8_souvenir_4');

const title_photo1_souvenir_5 = document.getElementById('title_photo1_souvenir_5');
const title_photo2_souvenir_5 = document.getElementById('title_photo2_souvenir_5');
const title_photo3_souvenir_5 = document.getElementById('title_photo3_souvenir_5');
const title_photo4_souvenir_5 = document.getElementById('title_photo4_souvenir_5');
const title_photo5_souvenir_5 = document.getElementById('title_photo5_souvenir_5');

const title_result_souvenir_2 = document.getElementById('title_result_souvenir_2');


$("#taskviewIconFrame").click(function () {
    if(language == 0){
        language = 1;
        english();
    }
    else{
        language = 0;
        french();
    }
});

function english() {

    document.getElementById("taskviewIconFrame").title = "Passer au français";

    winverBody.innerHTML = `
    <img class="winbanner"
    src="data:image/png;base64,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"
    alt="Windows 10">
<hr style="width: 91%; margin-top: 0;">
<p class="wintext">Me, it's Nadem, I'm 32 years old, I'm a computer scientist, I spend most of my time coding in front of my computer. </p>
<p class="wintext">I have a steady job. <br> 
    I play tennis from time to time with friends, I had a good level before, but I lost a lot….
</p>
<p class="wintext">A fiance, Alev, with whom I have shared my life since university. <br>
    You know, we're starting to plan, we plan to get a civil partnership, take out a loan and buy a house, we'd like to adopt a child and...  <br>
    Wait… already? <br>
    How I got here, so fast, I barely had time to live! <br>
    So much time wasted in front of a screen working on my competitions… Without even getting the school of my dreams… <br>
    I have traveled very little… What if I had allowed myself to discover a little more of the world? <br>
    If only I had fully invested myself in tennis… And if I had had the courage to follow my dream… <br>
    And then… Am I really happy with Alev? After all the stigma we suffered, the difficulty in adopting... <br> 
    What if I had chosen a woman? After all I was attracted to a few before Alev…<br>
    My life could have been so different… <br>
    </p>
<p class="wintext">Then If? … <br></p>
<br>
<div class="btnFrame">
    <button class="winbutton" id="winverOK">OK</button>
</div>
    `;

    souvenir_1.innerHTML = `<i class="fa fa-folder"></i>
    <span>Work</span>`;
    souvenir_2.innerHTML = `<i class="fa fa-folder"></i>
    <span>Love</span>`;
    souvenir_3.innerHTML = `<i class="fa fa-folder"></i>
    <span>Travel</span>`;
    souvenir_4.innerHTML = `<i class="fa fa-folder"></i>
    <span>Family</span>`;
    souvenir_5.innerHTML = `<i class="fa fa-folder"></i>
    <span>Tennis</span>`;
    souvenir_6.innerHTML = `<i class="fa fa-folder"></i>
    <span>Then If?</span>`;
    

    photo1_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>refusal.png</span>`;
    photo2_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;
    photo3_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>accept.png</span>`;
    photo4_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>arrangement.png</span>`;
    photo5_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;
    photo6_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>refusal.png</span>`;
    photo7_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>screen.png</span>`;
    photo8_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;

    photo1_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Certificate.png</span>`;
    photo2_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Request.png</span>`;
    photo3_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Family.png</span>`;
    photo4_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Invitation.png</span>`;
    photo5_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Medications.png</span>`;
    photo6_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Friends.png</span>`;
    photo7_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Tinder.png</span>`;
    
    result_souvenir_2.innerHTML = `<i class="fa fa-file"></i>
    <span>result.txt</span>`;

    photo1_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>notice.png</span>`;
    photo2_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>ticket.png</span>`;
    photo3_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>countryside.png</span>`;
    photo4_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>journey.png</span>`;
    photo5_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>the night.png</span>`;
    photo6_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>great news.png</span>`;
    photo7_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;
    photo8_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>map.png</span>`;
    photo9_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>thanks.png</span>`;
    photo10_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>disorganized.png</span>`;
    photo11_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>sent.png</span>`;
    photo12_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>sold.png</span>`;
    photo13_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>message.png</span>`;

    photo1_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Message.png</span>`;
    photo2_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Wedding.png</span>`;
    photo3_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Noel.png</span>`;
    photo4_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Weekend.png</span>`;
    photo5_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Present.png</span>`;
    photo6_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Porto.png</span>`;
    photo7_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Cousins.png</span>`;
    photo8_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Oggy.png</span>`;

    photo1_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>announcement.png</span>`;
    photo2_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>fracture.png</span>`;
    photo3_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>license.png</span>`;
    photo4_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>license.png</span>`;
    photo5_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>friends.png</span>`;

    npTextarea_readme_souvenir_1.innerHTML = `  I always knew that I wanted to work in IT, I was sure that this field corresponded to me. Indeed, from an early age I spent a lot of time on video games and as soon as my level of mathematics was good enough I even tried to create mini games on different platforms.
    Here I am in final year, I am 18 years old and have a lot of ambition. EPITA, the school of engineers in artificial intelligence of Paris was my objective, only one obstacle: the written competition.
    I then worked hard to succeed, however it was not enough. I failed the competition and was forced to go to the university in my city. What if I had worked more? What if I had spent less time in my office but more with my friends, and if...`

    npTextarea_readme_souvenir_2.innerHTML = `  I've been with Alev for 20 years… We're happy, huh! But it wasn't always easy, we had to deal with the judgments of others, stereotypes, administrative complications, it's crazy to have so many spokes in the wheels just because of your sexuality...
    And if I had stayed with Sophie, after all we were a pretty couple, beautiful heterosexual and perfect, we wouldn't have encountered so many complications.
    But besides, why would you want to settle down at all costs? I may have had good times as a couple, but I miss my freedom so much...
    And if ?...`;

    npTextarea_readme_souvenir_3.innerHTML = `  I am not what one might call an adventurer, a man thirsty for adrenaline and discovery. I have a daily life that is enough for me… was enough? Soon I may be hired? Lost in the regular rhythm of my days, I forget the passing time, I told myself that I still had a whole life left, but now?
    My thoughts wander about what might or might not have been.
    What if only I had traveled more? If I had discovered the world?
    I often blame myself for my lack of openness, under the almost pained gaze of Alev who, I know, has had so many international experiences. Would I have found myself transformed by these trips if I had had the audacity to go further?
    Already if only in France…
    Isn't it too much stress, preparation..? And time? I didn't have the time, I didn't have the money. And why do ?`;

    npTextarea_readme_souvenir_4.innerHTML = `  Today I wonder about my relationships, who can I really count on? Who can I always count on?
    Wouldn't I have neglected the most important people and with whom a bond lasts forever?
    Indeed, the only relationships that should not be ephemeral are family relationships and unfortunately I realized this too late.
    Did the hours spent in my room take me away from family life? Did my sister's marriage mark a turning point in my relationship?`;

    npTextarea_readme_souvenir_5.innerHTML = `  I started tennis with my father, when I was young, very young… In fact as long as I can remember the time spent with my father, I always had a racket in my hand.

    In college I started doing it in a club, I had a good level, my coach already imagined himself on the podium of Roland Gragos, the regional tennis tournament of our region, the Oise.
    
    But hey… Over time, although I gave myself the financial means, my motivation only decreased over time. Since my adolescence, my level has only dropped, my practice has become more and more occasional. I even injured myself recently because of my lack of regularity… Fractured collarbone…
    I'm going to stop, this sport costs me too much compared to the investment I give to it...
    
    What if... What if my motivation had not weakened over time?`;

    npTextarea_code_souvenir_1.innerHTML = `<p>def FunctionWork(t_work):</p>
    <p>&emsp;print("Work")</p>
    <p>&emsp;#Start a new day</p>
    <p>&emsp;#t_work: number of working hours</p>
    <p>&emsp;t_friend=8-t_work #hours spent with friends</p>
    <p>&emsp;while t &lt; t_work:</p>
    <p>&emsp;&emsp;t+=1</p>
    <p>&emsp;&emsp;print( "Today, I worked: ", t , " hours")</p>
    <p>&emsp;return 0</p>
    <p>if __name__ == "__main__":</p>
    <p>&emsp;FunctionWork(<select id="souvenir_1_choice_1" name="choice_1">
            <option>6</option>
            <option>8</option>
            <option>4</option>
        </select>)</p>`;

    npTextarea_code_souvenir_2.innerHTML = `<p>
    def FunctionLove():

</p>
<p>
    &emsp;print("Love")
</p>
<p>
    &emsp;<select id="souvenir_2_choice_1" name="choice_1">
        <option>Alev()</option>
        <option>Sophie()</option>
        <option>Celibat()</option>
    </select>
</p>
<p>if __name__ == "__main__":</p>
<p>&emsp;FunctionLove()</p>`;

    npTextarea_code_souvenir_3.innerHTML = `<p>
    def FunctionTravel():<br>
    <br>
    duration_max= 2 # for a weekend... <br>
    destination = ["Limousin"]



</p>


<p> 
    # Planning
    reason = [ "<select id="souvenir_3_choice_2" name="choice_2">
        <option value="raison1">meeting 1</option>
        <option value="raison2">canceled</option>
    </select>"
    , "<select id="souvenir_3_choice_3" name="choice_3">
    <option value="raison1">project meeting</option>
    <option value="raison2">canceled</option>
    </select> "
    , "<select id="souvenir_3_choice_4" name="choice_4">
    <option value="raison1">meeting 2</option>
    <option value="raison2">canceled</option>
</select>"]
</p>

<p>
    for i in range(len(reason)): <br>
    &emsp;if reason[i] !="canceled": <br>
    &emsp;&emsp;duration_max = duration_max-3*10<br>
    <br>

    if duration_max > 10: <br>
    &emsp;destination += add_destination2() <br>
    elif duration_max >30: <br>
    &emsp;destination += add_destination3()<br>
    elif duration_max > 360:<br>
    &emsp;destination += add_destination4()<br>
</p>

<p> motivation= <select id="souvenir_3_choice_1" name="choice_1">
    <option value="false">False</option>
    <option value="true">True</option>
</select>
</p>

<p>
    if motivation == True: <br>
    &emsp;exec_mail_sent()<br>
    else:<br>
    &emsp;break<br>
    &emsp;#do nothing<br>
</p>
<p>
    def FunctionPlanning(destination): <br>
    <br>
    &emsp;Planification(destination)<br>
    &emsp;Transport(destination)<br>
    &emsp;Activite(destination)<br>
    return 0<br>
</p>

<p>
    if __name__=="__main__": <br>
    &emsp;FunctionTravel()<br>
    &emsp;FunctionPlanning(destination)
    
        

</p>`;
    
    npTextarea_code_souvenir_3_2.innerHTML = `<p>
    def FunctionGo():<br>
    &emsp;FunctionTicket(); <br>
    &emsp;FunctionAffair(); <br>
    <br>




</p>
<p>
    if __name__=="__main__": <br>
    &emsp;FunctionGo(<select id="souvenir_3_choice_5" name="choice_5">
        <option id="destination1" value="destination1" selected>Limousin</option>
        <option id="destination2" value="destination2">GR20 corse</option>
        <option id="destination3" value="destination3">Tour of Europe</option>
        <option id="destination4" value="destination4">USA</option>
    </select>)	

</p>`;

    npTextarea_code_souvenir_4.innerHTML = `<p>
    def FunctionFamily():

</p>
<p>
    &emsp;print("Family")
</p>
<p>
    &emsp;h = <select id="souvenir_4_choice_1" name="choice_1"> 
        <option>8</option>
        <option>5</option>
        <option>2</option>
    </select> #time spent in your bedroom
</p>
<p>
    &emsp;wedding_of_Leïla = <select id="souvenir_4_choice_2" name="choice_2">
        <option>True</option>
        <option>False</option>
    </select>
</p>
<p>
    &emsp;return 0
</p>
<p>if __name__ == "__main__":</p>
<p>&emsp;FunctionFamily()</p>`;

    npTextarea_code_souvenir_5.innerHTML = `<p>
    def FunctionLevelTennis():
</p>
&emsp;print("Tennis") <br>
&emsp;motivation = 50 <br>
&emsp;age = 12 <br>
&emsp;level = 50 <br>
&emsp;budget = 500 <br>

&emsp;for i in range(32-age): <br>
&emsp;&emsp;motivation =
<select id="souvenir_5_choice_1" name="choice_1">
    <option>motivation*0.9</option>
    <option>motivation</option>
</select>
<br>
&emsp;&emsp;if motivation>40 and budget==500 : <br>
&emsp;&emsp;&emsp;level += 1 <br>
&emsp;&emsp;if motivation &lt; 20: <br>
&emsp;&emsp;&emsp;level =
<select id="souvenir_5_choice_2" name="choice_2">
    <option value="niveau-1">level-1</option>
    <option value="niveau">level</option>
</select>
<br>
&emsp;return(level) <br>
<p>if __name__ == "__main__":</p>
<p>&emsp;FunctionLevelTennis()</p>`;

    title_photo1_souvenir_1.innerHTML = `refusal.png`;
    title_photo2_souvenir_1.innerHTML = `planning.png`;
    title_photo3_souvenir_1.innerHTML = `accept.png`;
    title_photo4_souvenir_1.innerHTML = `arrangement.png`;
    title_photo5_souvenir_1.innerHTML = `planning.png`;
    title_photo6_souvenir_1.innerHTML = `refusal.png`;
    title_photo7_souvenir_1.innerHTML = `screen.png`;
    title_photo8_souvenir_1.innerHTML = `planning.png`;

    title_photo1_souvenir_2.innerHTML = `Certificate.png`;
    title_photo2_souvenir_2.innerHTML = `Request.png`;
    title_photo3_souvenir_2.innerHTML = `Family.png`;
    title_photo4_souvenir_2.innerHTML = `Invitation.png`;
    title_photo5_souvenir_2.innerHTML = `Medications.png`;
    title_photo6_souvenir_2.innerHTML = `Friends.png`;
    title_photo7_souvenir_2.innerHTML = `Tinder.png`;

    title_photo1_souvenir_3.innerHTML = `notice.png`;
    title_photo2_souvenir_3.innerHTML = `ticket.png`;
    title_photo3_souvenir_3.innerHTML = `countryside.png`;
    title_photo4_souvenir_3.innerHTML = `journey.png`;
    title_photo5_souvenir_3.innerHTML = `the night.png`;
    title_photo6_souvenir_3.innerHTML = `great news.png`;
    title_photo7_souvenir_3.innerHTML = `planning.png`;
    title_photo8_souvenir_3.innerHTML = `map.png`;
    title_photo9_souvenir_3.innerHTML = `thanks.png`;
    title_photo10_souvenir_3.innerHTML = `disorganized.png`;
    title_photo11_souvenir_3.innerHTML = `sent.png`;
    title_photo12_souvenir_3.innerHTML = `sold.png`;
    title_photo13_souvenir_3.innerHTML = `message.png`;

    title_photo1_souvenir_4.innerHTML = `Message.png`;
    title_photo2_souvenir_4.innerHTML = `Wedding.png`;
    title_photo3_souvenir_4.innerHTML = `Noel.png`;
    title_photo4_souvenir_4.innerHTML = `Weekend.png`;
    title_photo5_souvenir_4.innerHTML = `Present.png`;
    title_photo6_souvenir_4.innerHTML = `Porto.png`;
    title_photo7_souvenir_4.innerHTML = `Cousins.png`;
    
    title_photo1_souvenir_5.innerHTML = `announcement.png`;
    title_photo2_souvenir_5.innerHTML = `fracture.png`;
    title_photo3_souvenir_5.innerHTML = `license.png`;
    title_photo4_souvenir_5.innerHTML = `license.png`;
    title_photo5_souvenir_5.innerHTML = `friends.png`;

    npTextarea_readme_souvenir_3_2.innerHTML = `NOTE: TOUR OF EUROPE ORGANIZATION

    -> maximum optimization
    Inspirational link for organization: 		
    
    http://www.randalolson.com/2015/03/08/computing-the-optimal-road-trip-across-the-u-s/
    
    The perfect link!!!
    Computing the optimal road trip across Europe
    http://www.randalolson.com/2015/03/10/computing-the-optimal-road-trip-across-europe/`;

    title_result_souvenir_2.innerHTML = `result.txt - Notepad`;
}

function french() {

    document.getElementById("taskviewIconFrame").title = "Swap to English";

    winverBody.innerHTML = `<img class="winbanner"
    src="data:image/png;base64,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"
    alt="Windows 10">
<hr style="width: 91%; margin-top: 0;">
<p class="wintext">Moi, c’est Nadem, j’ai 32 ans, je suis informaticien, je passe d'ailleurs le plus clair de mon temps à coder devant mon ordinateur. </p>
<p class="wintext">J’ai un boulot stable. <br> 
    Je joue au tennis de temps en temps avec des copains, j’avais un bon niveau avant, mais j’ai pas mal perdu….
</p>
<p class="wintext">Un fiancé, Alev, avec qui je partage ma vie depuis l’université. <br>
    Tu sais on commence à se projeter, on envisage de se pacser, de faire un prêt et d’acheter une maison, on aimerait adopter un enfant et…  <br>
    Attends… déjà ? <br>
    Comment j’en suis arrivé là, si vite, j’ai à peine eu le temps de vivre ! <br>
    Tellement de temps gâché devant un écran à bosser mes concours… Sans même obtenir l’école de mes rêves… <br>
    J’ai très peu voyagé… Et si je m’étais permis de découvrir un peu plus le monde? <br>
    Si seulement je m’étais investi à fond au tennis… Et si j’avais eu le courage de suivre mon rêve… <br>
    Et puis… Est ce que je suis vraiment heureux avec Alev ? Après toute la stigmatisation qu’on a subi, la difficulté pour adopter… <br> 
    Et si j’avais choisis une femme ? Après tout j’ai été attiré par quelques unes avant Alev…<br>
    Ma vie aurait pu être si différente… <br>
    </p>
<p class="wintext">Et si ? … <br></p>
<br>
<div class="btnFrame">
    <button class="winbutton" id="winverOK">OK</button>
</div>`;


    souvenir_1.innerHTML = `<i class="fa fa-folder"></i>
    <span>Travail</span>`;
    souvenir_2.innerHTML = `<i class="fa fa-folder"></i>
    <span>Amour</span>`;
    souvenir_3.innerHTML = `<i class="fa fa-folder"></i>
    <span>Voyage</span>`;
    souvenir_4.innerHTML = `<i class="fa fa-folder"></i>
    <span>Famille</span>`;
    souvenir_5.innerHTML = `<i class="fa fa-folder"></i>
    <span>Tennis</span>`;
    souvenir_6.innerHTML = `<i class="fa fa-folder"></i>
    <span>Et Si?</span>`;
    

    photo1_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>refus.png</span>`;
    photo2_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;
    photo3_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>accept.png</span>`;
    photo4_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>ordonnance.png</span>`;
    photo5_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;
    photo6_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>refus.png</span>`;
    photo7_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>screen.png</span>`;
    photo8_souvenir_1.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;

    photo1_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Certificat.png</span>`;
    photo2_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Demande.png</span>`;
    photo3_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Famille.png</span>`;
    photo4_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Invitation.png</span>`;
    photo5_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Médicaments.png</span>`;
    photo6_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Copains.png</span>`;
    photo7_souvenir_2.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Tinder.png</span>`;

    result_souvenir_2.innerHTML = `<i class="fa fa-file"></i>
    <span>résultat.txt</span>`;

    photo1_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>notice.png</span>`;
    photo2_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>billet.png</span>`;
    photo3_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>paysage.png</span>`;
    photo4_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>randonnee.png</span>`;
    photo5_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>la nuite.png</span>`;
    photo6_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>grande nouvelle.png</span>`;
    photo7_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>planning.png</span>`;
    photo8_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>carte.png</span>`;
    photo9_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>mercii.png</span>`;
    photo10_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>brouillon.png</span>`;
    photo11_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>envoyé.png</span>`;
    photo12_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>sold.png</span>`;
    photo13_souvenir_3.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>message.png</span>`;

    photo1_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Message.png</span>`;
    photo2_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Mariage.png</span>`;
    photo3_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Noel.png</span>`;
    photo4_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Weekend.png</span>`;
    photo5_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Cadeau.png</span>`;
    photo6_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Porto.png</span>`;
    photo7_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Cousinades.png</span>`;
    photo8_souvenir_4.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>Oggy.png</span>`;

    photo1_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>anonnce.png</span>`;
    photo2_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>fracture.png</span>`;
    photo3_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>lisence.png</span>`;
    photo4_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>lisence.png</span>`;
    photo5_souvenir_5.innerHTML = `<i class="fa fa-file-image-o" aria-hidden="true"></i>
    <span>copains.png</span>`;
    
    npTextarea_readme_souvenir_1.innerHTML = `  J’ai toujours su que je voulais travailler dans l’informatique, j’avais la certitude que ce domaine me correspondait. En effet, dès mon plus jeune âge j'ai passé énormément de temps sur les jeux vidéos et dès que mon niveau de mathématiques fut assez bon j’ai même essayé de créer des mini jeux sur différentes plateformes.
	Me voilà en terminale, j’ai 18 ans et beaucoup d’ambition. EPITA, l’école des ingénieurs en intelligence artificielle de Paris était mon objectif, un seul obstacle : le concours écrit.
	J’ai alors travaillé dur pour réussir, cependant cela n’a pas suffit. J’ai raté le concours et fut obligé de partir dans l’université de ma ville. Et si j’avais travaillé plus ? Et si j’avais passé moins de temps dans mon bureau mais plus avec mes amis, et si…
	`;
    npTextarea_readme_souvenir_2.innerHTML = `  Ça va faire 20 ans que je suis avec Alev… On est heureux hein ! Mais ça n'a pas toujours été facile, on a dû faire face aux jugements des autres, des stéréotypes, des complications administratives, c’est fou d’avoir autant de bâtons dans les roues juste à cause de sa sexualité…
    Et si j’étais resté avec Sophie, après tout on formait un jolie couple, beau hétérosexuel et parfait, on aurait pas rencontré autant de complications.
    Mais d’ailleurs pourquoi vouloir se caser à tout prix ? J’ai peut-être vécu des bons moments en couple, mais ma liberté me manque tellement…
    Et si ?...`;

    npTextarea_readme_souvenir_3.innerHTML = `  Je ne suis pas ce qu’on pourrait appeler un aventurier, un homme en soif d’adrénaline et de découverte. J’ai un quotidien qui me suffit… suffisait ? Bientôt je serai peut être engagé ? Perdu dans le rythme régulier de mes journées, j’en oublie le temps qui défile, je me disais qu’il me restait encore toute une vie mais désormais ? 
    Mes idées vagabondent sur ce qui aurait pu ou ne pas être.
    Et si seulement j’avais plus voyagé ? Si j’avais découvert le monde ?
    Je me reproche souvent mon manque d’ouverture, sous le regard presque peiné d'Alev qui, je le sais , a vécu tant d'expériences à l'internationale. Me serais-je retrouvé métamorphosé par ces voyages si j’avais eu l’audace de partir plus loin ?
    Déjà ne serait ce qu’en France…
    N’est ce pas trop de stress, de préparation.. ? Et de temps ? Je n’avais pas le temps, je n’avais pas l’argent. Et pourquoi faire ?`;
    
    npTextarea_readme_souvenir_4.innerHTML = `  Aujourd’hui je me questionne sur mes relations, sur qui puis-je vraiment compter ? Sur qui pourrais-je toujours compter ? 
    N’aurais-je pas négligé les personnes les plus importantes et avec qui un lien perdure éternellement ? 
    En effet, les seules relations qui ne doivent pas être éphémères sont les relations familiales et malheureusement j’en ai pris conscience trop tard. 
    Les heures passées dans ma chambre m’ont-elle éloignée de la vie familiale ? Le mariage de ma sœur a-t-il marqué un tournant dans mes relations ?`;

    npTextarea_readme_souvenir_5.innerHTML = `  J’ai commencé le tennis avec mon père, quand j’étais jeune, très jeune… En fait aussi longtemps que je puisse me souvenir du temps passé avec mon père, j’ai toujours eu une raquette à la main.

	Au collège j’ai commencé à en faire en club, j’avais un bon niveau, mon coach s'imaginait déjà sur le podium de Roland Gragos, le tournois de tennis régional de notre région ,l’Oise.
					
	Mais bon… Avec le temps, bien que je me sois donné les moyens financiers, ma motivation n’a fait que baisser avec le temps. Depuis mon adolescence, mon niveau n’a fait que baisser, ma pratique est devenue de plus en plus occasionnelle. Je me suis même blessé récemment à cause de mon manque de régularité… Fracture à la clavicule…
	Je vais arrêter, ce sport me coûte trop cher comparé à l’investissement que j’y accorde…
					
	Et si… Et si ma motivation n’avait pas faibli avec le temps ?`;

    npTextarea_code_souvenir_1.innerHTML = `<p>def FonctionTravail(t_travail):</p>
    <p>&emsp;print("Travail")</p>
    <p>&emsp;#début de la journée</p>
    <p>&emsp;#t_travail: nbr heure de travail</p>
    <p>&emsp;t_amis=8-t_travail #heure avec ses amis</p>
    <p>&emsp;while t &lt; t_travail:</p>
    <p>&emsp;&emsp;t+=1</p>
    <p>&emsp;&emsp;print( "Aujourd’hui tu as travaillé: ", t , " heures")</p>
    <p>&emsp;return 0</p>
    <p>if __name__ == "__main__":</p>
    <p>&emsp;FonctionTravail(<select id="souvenir_1_choice_1" name="choice_1">
            <option>6</option>
            <option>8</option>
            <option>4</option>
        </select>)</p>`;

    npTextarea_code_souvenir_2.innerHTML = `<p>
    def FonctionAmour():

</p>
<p>
    &emsp;print("Amour")
</p>
<p>
    &emsp;<select id="souvenir_2_choice_1" name="choice_1">
        <option>Alev()</option>
        <option>Sophie()</option>
        <option>Celibat()</option>
    </select>
</p>
<p>if __name__ == "__main__":</p>
<p>&emsp;FonctionAmour()</p>`;

    npTextarea_code_souvenir_3.innerHTML = `<p>
    def FonctionVoyage():<br>
    <br>
    duree_max= 2 # le temps d'un weekend... <br>
    destination = ["Limousin"]



</p>


<p> 
    # Planning
    raison = [ "<select id="souvenir_3_choice_2" name="choice_2">
        <option value="raison1">réunion 1</option>
        <option value="raison2">annulé</option>
    </select>"
    , "<select id="souvenir_3_choice_3" name="choice_3">
    <option value="raison1">réunion projet</option>
    <option value="raison2">annulé</option>
    </select> "
    , "<select id="souvenir_3_choice_4" name="choice_4">
    <option value="raison1">réunion 2</option>
    <option value="raison2">annulé</option>
</select>"]
</p>

<p>
    for i in range(len(raison)): <br>
    &emsp;if raison[i] !="annulé": <br>
    &emsp;&emsp;duree_max = duree_max-3*10<br>
    <br>

    if duree_max > 10: <br>
    &emsp;destination += ajout_destination2() <br>
    elif duree_max >30: <br>
    &emsp;destination += ajout_destination3()<br>
    elif duree_max > 360:<br>
    &emsp;destination += ajout_destination4()<br>
</p>

<p> motivation= <select id="souvenir_3_choice_1" name="choice_1">
    <option value="false">False</option>
    <option value="true">True</option>
</select>
</p>

<p>
    if motivation == True: <br>
    &emsp;exec_mail_envoyé()<br>
    else:<br>
    &emsp;break<br>
    &emsp;#ne rien faire<br>
</p>
<p>
    def FonctionPlanning(destination): <br>
    <br>
    &emsp;Planification(destination)<br>
    &emsp;Transport(destination)<br>
    &emsp;Activite(destination)<br>
    return 0<br>
</p>

<p>
    if __name__=="__main__": <br>
    &emsp;FonctionVoyage()<br>
    &emsp;FonctionPlanning(destination)
    
        

</p>`;
    
    npTextarea_code_souvenir_3_2.innerHTML = `<p>
    def FonctionGo():<br>
    &emsp;FonctionBillet(); <br>
    &emsp;FonctionAffaire(); <br>
    <br>




</p>
<p>
    if __name__=="__main__": <br>
    &emsp;FonctionGo(<select id="souvenir_3_choice_5" name="choice_5">
        <option id="destination1" value="destination1" selected>Limousin</option>
        <option id="destination2" value="destination2">GR20 corse</option>
        <option id="destination3" value="destination3">Tour de l'Europe</option>
        <option id="destination4" value="destination4">Etats Unis</option>
    </select>)	

</p>`;

    npTextarea_code_souvenir_4.innerHTML = `<p>
    def FonctionFamille():

</p>
<p>
    &emsp;print("Famille")
</p>
<p>
    &emsp;h = <select id="souvenir_4_choice_1" name="choice_1"> 
        <option>8</option>
        <option>5</option>
        <option>2</option>
    </select> #temps passé dans la chambre
</p>
<p>
    &emsp;mariage_de_Leïla = <select id="souvenir_4_choice_2" name="choice_2">
        <option>True</option>
        <option>False</option>
    </select>
</p>
<p>
    &emsp;return 0
</p>
<p>if __name__ == "__main__":</p>
<p>&emsp;FonctionFamille()</p>`;

    npTextarea_code_souvenir_5.innerHTML = `<p>
    def FonctionNiveauTennis():
</p>
&emsp;print("Tennis") <br>
&emsp;motivation = 50 <br>
&emsp;age = 12 <br>
&emsp;niveau = 50 <br>
&emsp;budget = 500 <br>

&emsp;for i in range(32-age): <br>
&emsp;&emsp;motivation =
<select id="souvenir_5_choice_1" name="choice_1">
    <option>motivation*0.9</option>
    <option>motivation</option>
</select>
<br>
&emsp;&emsp;if motivation>40 and budget==500 : <br>
&emsp;&emsp;&emsp;niveau += 1 <br>
&emsp;&emsp;if motivation &lt; 20: <br>
&emsp;&emsp;&emsp;niveau =
<select id="souvenir_5_choice_2" name="choice_2">
    <option value="niveau-1">niveau-1</option>
    <option value="niveau">niveau</option>
</select>
<br>
&emsp;return(niveau) <br>
<p>if __name__ == "__main__":</p>
<p>&emsp;FonctionNiveauTennis()</p>`;

    title_photo1_souvenir_1.innerHTML = `refus.png`;
    title_photo2_souvenir_1.innerHTML = `planning.png`;
    title_photo3_souvenir_1.innerHTML = `accept.png`;
    title_photo4_souvenir_1.innerHTML = `ordonnance.png`;
    title_photo5_souvenir_1.innerHTML = `planning.png`;
    title_photo6_souvenir_1.innerHTML = `refus.png`;
    title_photo7_souvenir_1.innerHTML = `screen.png`;
    title_photo8_souvenir_1.innerHTML = `planning.png`;

    title_photo1_souvenir_2.innerHTML = `Certificat.png`;
    title_photo2_souvenir_2.innerHTML = `Demande.png`;
    title_photo3_souvenir_2.innerHTML = `Famille.png`;
    title_photo4_souvenir_2.innerHTML = `Invitation.png`;
    title_photo5_souvenir_2.innerHTML = `Médicaments.png`;
    title_photo6_souvenir_2.innerHTML = `Copains.png`;
    title_photo7_souvenir_2.innerHTML = `Tinder.png`;

    title_photo1_souvenir_3.innerHTML = `notice.png`;
    title_photo2_souvenir_3.innerHTML = `billet.png`;
    title_photo3_souvenir_3.innerHTML = `paysage.png`;
    title_photo4_souvenir_3.innerHTML = `randonnee.png`;
    title_photo5_souvenir_3.innerHTML = `la nuit.png`;
    title_photo6_souvenir_3.innerHTML = `grande nouvelle.png`;
    title_photo7_souvenir_3.innerHTML = `planning.png`;
    title_photo8_souvenir_3.innerHTML = `carte.png`;
    title_photo9_souvenir_3.innerHTML = `mercii.png`;
    title_photo10_souvenir_3.innerHTML = `brouillon.png`;
    title_photo11_souvenir_3.innerHTML = `envoye.png`;
    title_photo12_souvenir_3.innerHTML = `sold.png`;
    title_photo13_souvenir_3.innerHTML = `message.png`;

    title_photo1_souvenir_4.innerHTML = `Message.png`;
    title_photo2_souvenir_4.innerHTML = `Mariage.png`;
    title_photo3_souvenir_4.innerHTML = `Noel.png`;
    title_photo4_souvenir_4.innerHTML = `Weekend.png`;
    title_photo5_souvenir_4.innerHTML = `Cadeau.png`;
    title_photo6_souvenir_4.innerHTML = `Porto.png`;
    title_photo7_souvenir_4.innerHTML = `Cousinades.png`;
    
    title_photo1_souvenir_5.innerHTML = `anonnce.png`;
    title_photo2_souvenir_5.innerHTML = `fracture.png`;
    title_photo3_souvenir_5.innerHTML = `lisence.png`;
    title_photo4_souvenir_5.innerHTML = `lisence.png`;
    title_photo5_souvenir_5.innerHTML = `copains.png`;

    npTextarea_readme_souvenir_3_2.innerHTML = `NOTE: ORGANISATION TOUR DE L'EUROPE

    -> optimisation maximal
    Lien inspirant pour organisation: 		
    
    http://www.randalolson.com/2015/03/08/computing-the-optimal-road-trip-across-the-u-s/
    
    Le lien parfait !!!
    Computing the optimal road trip across Europe
    http://www.randalolson.com/2015/03/10/computing-the-optimal-road-trip-across-europe/`;

    title_result_souvenir_2.innerHTML = `résultat.txt - Notepad`;
}