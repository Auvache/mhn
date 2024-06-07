<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>Frequently Asked Questions</h1>
            <p>Between all the platforms where I post about my life with sleep apnea and using a CPAP, I get asked a LOT of questions. Here is a list of my most frequently asked questions with some resources to help you to find the answers.</p>

            <div class="accordionGroup">
              <button class="accordion" @click="toggleAccordionTab('tab1')">What CPAP Mask do you use?</button>
              <div id="tab1" class="panel">
                <div>
                  <p>ResMed Airfit F30i</p>
                  <p><i>(*Please note that this mask has magnets. Do NOT use this CPAP mask if you or a partner has a medical device that can be affected by magnets.)</i></p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/products/resmed">CPAP Mask – ResMed Airfit F30i</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylS4EFj0JHsTWXh7ZV7YPZsp" target="_blank">FAQ 1: About My CPAP Mask (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab2')">Do You Have Any Tips to Help with CPAP Mask Marks/Redness?</button>
              <div id="tab2" class="panel">
                <div>
                  <p>I’ve found that having a CPAP mask that fits your face shape helps the most with this. A lot of times problems happen due to poor fit.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/224-marks-12-tips-to-help-with-cpap-mask-skin-irritation-and-marks">224. MARKS - 12 Tips to Help with CPAP Mask Skin Irritation and Marks</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylQ1NTM8VgMnRDbJqwlyDbvS" target="_blank">FAQ 2: Tips for CPAP Mask Marks (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab3')">My CPAP Mask Keeps Leaking - How to Help This?</button>
              <div id="tab3" class="panel">
                <div>
                  <p>Having a properly fitting CPAP mask is crucial. CPAP masks are not created differently and fit differently on people. You have to try different models to figure out what works for you.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/222-leaks-7-tips-that-help-me-battle-cpap-mask-leaks">222. LEAKS – 7 Tips That Help Me Battle CPAP Mask Leaks</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylQ_r8nmv5_SQvFkzGU9wHkd" target="_blank">FAQ 3: Help CPAP Mask Leaks (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab4')">How to Help Claustrophobia with my CPAP Mask? </button>
              <div id="tab4" class="panel">
                <div>
                  <p>Practice while awake for short periods of time and work up to a whole night.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/218-claustrophobia-7-tips-to-help-get-used-to-your-cpap-mask">218. CLAUSTROPHOBIA- 7 Tips to Help Get Used to Your CPAP Mask</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylTHZ4w7bmIuuhLk6Fk72FmL" target="_blank">FAQ 4: Claustrophobia + CPAP Mask (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab5')">What are Your Travel Tips with a CPAP?</button>
              <div id="tab5" class="panel">
                <div>
                  <p>Take it with you even on those single overnighters! Remember that a CPAP doesn’t count as a piece of carry-on on a plane because it is medical equipment.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/travel-my-experience-with-traveling-with-a-cpap">225. TRAVEL – My Experience with Traveling with a CPAP</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylSLXDosc9VZcyEMYvfbFh9C" target="_blank">FAQ 5: Traveling with a CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab6')">How Do You Clean Your CPAP?</button>
              <div id="tab6" class="panel">
                <div>
                  <p>Weekly with mild dish soap and warm water. I do wipe down my mask nightly with CPAP wipes.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylQy0WX6yteRg6teI565Io5b" target="_blank">FAQ 6: Cleaning CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab7')">Help with Feeling Embarrassed being Diagnosed with Sleep Apnea and Needing a CPAP</button>
              <div id="tab7" class="panel">
                <div>
                  <p>Remember what the CPAP is doing for your life instead of what it is doing to your life. Give it time, allow yourself grace, but then take the bull by the horns.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/123-embarrassed-when-i-learned-i-had-sleep-apnea">123. EMBARRASSED - When I Learned I Had Sleep Apnea</router-link></li>
                    <li><router-link to="/post/182-shy-i-didnt-want-to-talk-about-sleep-apnea">182. SHY- I Didn’t Want to Talk about Sleep Apnea</router-link></li>
                    <li><router-link to="/post/196-comparison-how-i-compared-myself-to-others-without-sleep-apnea">196. COMPARISON – Comparing Myself to Others Without Sleep Apnea</router-link></li>
                    <li><router-link to="/post/198-recognition-recognizing-two-parts-of-accepting-sleep-apnea-diagnosis">198. RECOGNITION - Recognizing Sleep Apnea Diagnosis in Life</router-link></li>
                    <li><router-link to="/post/204-acknowledge-accepting-your-sleep-apnea-diagnosis">204. ACKNOWLEDGE - Accepting Your Sleep Apnea Diagnosis</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylRGLZcYPItIGv3F20yWoe6m" target="_blank">FAQ 7: Feeling Embarrassed about Sleep Apnea and CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab8')">What is Your Skincare Routine?</button>
              <div id="tab8" class="panel">
                <div>
                  <p>I’m a less is more type girl. I keep my mask clean and free from cleaners/soap that would irritate my skin. I drink water and moisturize my face twice a day.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylQJFUv67uhhYVqK-YsVAef3" target="_blank">FAQ 8: My Skincare Routine (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab9')">Is CPAP Worth it?</button>
              <div id="tab9" class="panel">
                <div>
                  <p>Yes because your health is worth it.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/185-worth-my-cpap-is-worth-it-and-heres-why">185. WORTH – My CPAP is Worth it and Here’s Why</router-link></li>
                    <li><router-link to="/post/215-distance-i-will-go-the-distance-as-sleep-apnea-patient"> 205. VALUE – Sleep is Valuable to Your Body</router-link></li>
                    <li><router-link to="/post/221-living-life-with-a-cpap">221. LIVING - Life with A CPAP</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylT54Oj8IFg6d25-uWaW0SgN" target="_blank">FAQ 9: Is Using CPAP Worth it? (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab10')">Do you Struggle with CPAP?</button>
              <div id="tab10" class="panel">
                <div>
                  <p>I tell myself that CPAP therapy is a marathon. Not a sprint. It was a much bigger struggle in the beginning, and there are still some nights where it's not perfect. However, the benefits I see in my life greatly outweigh the struggle.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/202-fix-a-cpap-is-not-an-easy-fix-for-sleep-apnea">202. FIX – A CPAP is not an Easy Fix for Sleep Apnea</router-link></li>
                    <li><router-link to="/post/213-skip-do-i-ever-skip-a-night-of-cpap-use">213. SKIP - Do I Ever Skip a Night of CPAP Use?</router-link></li>
                    <li><router-link to="/post/215-distance-i-will-go-the-distance-as-sleep-apnea-patient">215. DISTANCE – I will Go the Distance as a Sleep Apnea Patient</router-link></li>
                    <li><router-link to="/post/216-hate-how-hate-for-my-cpap-turned-into-a-positive-outlook">216. HATE – How Hate For My CPAP Turned into a Positive Outlook</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylS9g7MC3sO2H6OFaYaQO-IV" target="_blank">FAQ 10: Struggling with CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab11')">What Should I Know for My Upcoming Sleep Study?</button>
              <div id="tab11" class="panel">
                <div>
                  <p>What I was told that helped me was that they don’t need as much sleep as you think to diagnose you with sleep apnea. Do your best to relax and it will be okay.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/sleep-study">All About Sleep Studies</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylS5IpTj49InH2XxBd4GsTbh" target="_blank">FAQ 11: All About Sleep Studies (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab12')">How Long Did it Take for You to Notice a Difference Using a CPAP?</button>
              <div id="tab12" class="panel">
                <div>
                  <p>About a month and it was gradual improvement for many months after.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/223-gradual-improvements-i-saw-starting-cpap-therapy">223. GRADUAL- Improvements I Saw Starting CPAP Therapy</router-link></li>
                    <li><router-link to="/post/215-distance-i-will-go-the-distance-as-sleep-apnea-patient">203. COMPARE- My Sleep Apnea vs My Dad’s Sleep Apnea</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylRF0-bah-qIpjf4-3rAchMc" target="_blank">FAQ 12: The Difference with CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab13')">How Do You Fix Waking Up with Water In My CPAP Hose or CPAP Mask?</button>
              <div id="tab13" class="panel">
                <div>
                  <p>Pay attention to your CPAP humidity versus the temperature/humidity of your room and climate.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/products/cpap-rainout">4 Ways to Help with CPAP Rainout CPAP Hose Condensation</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylSIzywDMtjEIngwVA2S0j5c" target="_blank">FAQ 13: Water in CPAP Hose or Mask (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab14')">How Do You Cope with CPAP and Dating?</button>
              <div id="tab14" class="panel">
                <div>
                  <p>The right person will support you in your health and want you to be taken care of. Don’t worry about it.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/227-date-dating-with-a-cpap">227. DATING – My Thoughts about Dating with A CPAP</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylRv2nHUxT28O5WHZ3EFIGv0" target="_blank">FAQ 14: Dating with A CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab15')">Did You Have Surgery to Help Your Sleep Apnea?</button>
              <div id="tab15" class="panel">
                <div>
                  <p>Yes. I had my tonsils, adenoids removed as well as extra tissue in my throat and nose. </p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/92-incompatible-what-do-you-mean-im-cpap-machine-incompatible">92. INCOMPATIBLE- What do you mean I’m “CPAP Machine Incompatible?”</router-link></li>
                    <li><router-link to="/post/102-recovery-what-my-recovery-was-like-after-having-tonsils-and-adenoids-removed">102. RECOVERY - What My Recovery was like After Having Tonsils and Adenoids Removed</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylTEMp-iU6gDYR0OgRIa33e1" target="_blank">FAQ 15: Surgery and Sleep Apnea (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab16')">How Does Your Mental Health Have to Do with Sleep Apnea?</button>
              <div id="tab16" class="panel">
                <div>
                  <p>Sleep apnea interrupts breathing and robs your brain of oxygenated (oxygen you get from simply breathing) sleep or quality sleep. Without quality sleep, your brain suffers and can lead to mental illness.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/3-alamort-sleep-apnea-and-the-pains-of-being-half-mentally-dead">3. ALAMORT- Sleep Apnea and the Pains of Being Half Mentally Dead</router-link></li>
                    <li><router-link to="/post/4-dysania-and-clinomania-the-relationship-between-sleep-and-mental-health">4. DYSANIA and CLINOMANIA - The Relationship between Sleep and Mental Health</router-link></li>
                    <li><router-link to="/post/111-root-finding-the-cause-of-mental-illness">111. ROOT - Finding the Cause of Mental Illness</router-link></li>
                    <li><router-link to="/post/167-alarm-depression-is-my-alarm-system">167. ALARM - Depression is My Alarm System</router-link></li>
                    <li><router-link to="/post/200-culprit-sleep-apnea-feeds-my-depression">200. CULPRIT- Sleep Apnea Feeds My Depression</router-link></li>
                    <li><router-link to="/post/201-feast-how-sleep-apnea-fueled-my-depression">201. FEAST - How Sleep Apnea Fueled My Depression</router-link></li>
                    <li><router-link to="/post/210-tie-the-tie-between-my-mental-illness-and-sleep-apnea">210. TIE - The Tie Between My Mental Illness and Sleep Apnea</router-link></li>
                    <li><router-link to="/post/214-special-why-you-arent-special-with-sleep-apnea">214. SPECIAL - Why You Aren’t Special with Sleep Apnea</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylS7uJ11Qxf-Wruz1x-kMyF0" target="_blank">FAQ 16: Sleep Apnea and Mental Health (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab17')">What Do You Do With Your Hair While Using Your CPAP?</button>
              <div id="tab17" class="panel">
                <div>
                  <p>Throw it in a messy bun and hope for the best.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylTWmk8Hk3k1RWsY2xCZJew7" target="_blank">FAQ 17: CPAP Hair (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab18')">How Did You Know You Had Sleep Apnea?</button>
              <div id="tab18" class="panel">
                <div>
                  <p>I didn’t. It was a shock and I didn’t snore.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/133-shock-how-i-didnt-think-i-had-sleep-apnea">133. SHOCK- How I Didn’t Think I Had Sleep Apnea</router-link></li>
                    <li><router-link to="/post/183-how-how-did-i-know-i-had-sleep-apnea">183. HOW - How Did I Know I Had Sleep Apnea?</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylRV-3WZQTlDAAa2CcHrNHR_" target="_blank">FAQ 18: How Did You Know You Had Sleep Apnea? (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab19')">How Did You Adjust to Your CPAP?</button>
              <div id="tab19" class="panel">
                <div>
                  <p>With practice. Lots of practice.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/193-sleepscape-creating-a-safe-and-cozy-space-for-cpap-sleep">193. SLEEPSCAPE- Creating a Safe and Cozy Space for CPAP Sleep</router-link></li>
                    <li><router-link to="/post/226-adjust-5-tips-to-help-adjust-to-your-cpap-mask">226. ADJUST – 6 Tips to Help Adjust to Your CPAP Mask</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylTPrpoLFb3F0YHoN2ehXE7C" target="_blank">FAQ 19: Adjustment Tips to CPAP (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab20')">What Advice Do You Have for New CPAP Users?</button>
              <div id="tab20" class="panel">
                <div>
                  <p>Stick with it. Ask lots of questions and advocate for yourself. Try lots of things to see what works best for you.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/199-liberate-how-healthy-sleep-liberated-me">190. LIBERATE - How Healthy Sleep Liberated Me</router-link></li>
                    <li><router-link to="/post/215-distance-i-will-go-the-distance-as-sleep-apnea-patient">215. DISTANCE - I Will Go the Distance as Sleep Apnea Patient</router-link></li>
                    <li><router-link to="/post/219-tips-things-i-wish-i-knew-when-i-was-diagnosed-with-sleep-apnea">219. TIPS - Things I Wish I knew When Diagnosed with Sleep Apnea</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylR4rdksLXLLt9OJ357gzK10" target="_blank">FAQ 20: Advice for New CPAP Users (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab21')">Have You Tried Other CPAP Masks?</button>
              <div id="tab21" class="panel">
                <div>
                  <p>Yes, 3 or 4 different ones I believe. I started with a nasal mask.</p>
                  <p class="fw-bold">Related posts and videos:</p>
                  <ul>
                    <li><router-link to="/post/212-full-face-why-i-wear-a-full-face-cpap-mask">212. FULL FACE – Why I Wear a Full- Face CPAP Mask</router-link></li>
                    <li><a href="https://www.youtube.com/playlist?list=PL3rLw9UFaylSjGb5d0flj4omptuK8wzCy" target="_blank">FAQ 21: To Try Different CPAP Masks (YouTube Playlist)</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'

const toggleAccordionTab = (id) => {
  console.log(id)
  let tab = document.getElementById(id)
  tab.classList.toggle('show')
}
</script>
