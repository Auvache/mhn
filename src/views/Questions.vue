<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>Frequently Asked Questions</h1>

            <div class="accordionGroup">
              <button class="accordion" @click="toggleAccordionTab('tab1')">question 1</button>
              <div id="tab1" class="panel">
                <div>
                  <p>answer 1</p>
                  <p>answer 1</p>
                  <p>answer 1</p>
                  <p>answer 1</p>
                  <p>answer 1</p>
                </div>
              </div>

              <button class="accordion" @click="toggleAccordionTab('tab2')">question 2</button>
              <div id="tab2" class="panel">
                <div>
                  <p>answer 2</p>
                  <p>answer 2</p>
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
