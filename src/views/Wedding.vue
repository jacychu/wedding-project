<template>
  <div>
    <div class="absolute bg-black w-full h-20 bg-opacity-20">
      <span class="text-2xl text-white uppercase float-left pt-6 pl-6">
        Our Wedding
      </span>
    </div>
    <header class="bg-header flex items-center justify-center h-screen">
      <div class="mx-4 p-4 text-center md:p-8 text-white pb-12">
        <h1 class="text-6xl md:text-9xl mb-3">
          Anna & Adam
        </h1>
        <p class="text-lg mb-8">
          May 20, 2023, 7:00 PM   |   White Chapel
        </p>
        <button v-scroll-to="{ el: '#element' }" class="text-xl border-4 border-white p-2 w-40">
          RSVP
        </button>
      </div>
    </header>

    <div data-aos="zoom-in" class="leading-normal mx-auto py-12 px-4 max-w-lg">
      <p class="mb-6 text-xl md:text-4xl">Our Love Story</p>
      <p class="text-xl md:text-xl text-gray-400">We’re getting married :)</p>
    </div>
    <span><img src="../assets/brideandgroom.jpg" class="w-3/5 mx-auto"></span>
    <div data-aos="fade-up" class="leading-normal mx-auto py-12 px-4 max-w-lg">
      <p class="mb-4 text-lg">It was love at first sound. She called my apartment in a huff at 1:00 a.m.,
        looking to tell off my roommate, whom she had just started dating.
        My roommate wasn’t home, and I happened to be standing by the phone,
        so she vented to me, the faceless stranger. We ended up talking for two hours,
        learning a lot about each other, and falling in love.</p>
    </div>

    <div class="bg-quote flex items-center justify-center h-96 mx-auto">
      <blockquote class="bg-black bg-opacity-60 mx-4 p-4 text-center text-white md:p-4">
        <p class="font-bold text-3xl">
          &ldquo;True love stories never have endings.&rdquo;
        </p>
      </blockquote>
    </div>

    <div class="bg-info w-full">
      <div data-aos="zoom-in" class="leading-normal mx-auto py-12 px-4 max-w-lg">
        <p class="mb-6 text-xl md:text-4xl">Wedding Info</p>
        <!-- <p class="mb-6 text-xl md:text-xl text-gray-400">We’re getting married :)</p> -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border-white border-b-2 md:border-r-2 md:border-b-0">
            <div class="h-24">
              <div class="text-lg info-olive mb-4">When?</div>
              <p>May 20, 2023, 7:00 PM</p>
            </div>
          </div>
          <div>
            <div class="text-lg info-olive mb-4">Where?</div>
            <p>White Chapel,</p>
            <p>No. 232, Dunhua N. Rd., Songshan Dist.,</p>
            <p>Taipei City, 105 Taiwan</p>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" id="element" class="leading-normal mx-auto py-12 px-4 max-w-lg">
      <p class="mb-6 text-xl md:text-4xl">RSVP</p>
      <p class="mb-6 text-xl md:text-xl text-gray-400">Attend the wedding</p>
      <!-- <form @submit.prevent="collectData"> -->
      <form action="https://script.google.com/macros/s/AKfycbyAOzMapMYgjRwukrBzcdzcaQ-AzkKiNLrWzvtbMZoPUhcSQFcY_2eCnavDff2JE6Xf9A/exec" method="get">
        <div class="flex items-center mb-5">
          <label for="name" class="inline-block w-20 mr-6 text-right
                                  font-bold text-gray-600">*Name</label>
          <input type="text" id="name" name="name" v-model="name" required
                class="flex-1 py-2 border-b-2 border-gray-400
                        text-gray-600
                        placeholder-gray-400
                        outline-none">
        </div>
        <div class="flex items-center mb-10 this-form">
          <label for="email" class="inline-block w-20 mr-6 text-right
                                      font-bold text-gray-600">*Email</label>
          <input type="text" id="email" name="email" v-model="email" required
                class="flex-1 py-2 border-b-2 border-gray-400
                        text-gray-600
                        placeholder-gray-400
                        outline-none">
        </div>
        <div class="flex items-center mb-10">
          <label for="phone" class="inline-block w-20 mr-6 text-right
                                      font-bold text-gray-600">*Phone</label>
          <input type="text" id="phone" name="phone" v-model="phone" required
                class="flex-1 py-2 border-b-2 border-gray-400
                        text-gray-600
                        placeholder-gray-400
                        outline-none">
        </div>
        <div class="flex items-center mb-10">
          <label for="others" class="inline-block w-20 mr-6 text-right
                                      font-bold text-gray-600">Others</label>
          <textarea class="flex-1 py-2 border-b-2 border-gray-400
                        text-gray-600
                        placeholder-gray-400
                        outline-none" id="others" name="others" v-model="others">
          </textarea>
        </div>
        <div class="text-right">
          <button type="submit" class="py-3 px-8 form-olive-bg text-white font-bold">Submit</button>
        </div>
      </form>
    </div>
    <p class="m-6 text-gray-400">
      #AnnaHeartsAdam<br>
      © 2023 By Anna & Adam.
    <p>
    <footer class="absolute bg-black w-full h-10 bg-opacity-30">
    </footer>

  </div>
</template>

<script>
import axios from 'axios'
// import $ from "jquery";

export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      others: '',
    }
  },
  methods: {
    collectData() {
      // let name = this.name
      // let phone = this.phone
      // let email = this.email
      // let others = this.others
      // $.ajax({
      //   //type: "get",
      //   url: "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwO3n5eXHSr_gBo17DSAfW5mtThfnoRYsMGhkHtnQmhn4gaJCAWTov3_2vas05TVhLzKQ/exec",
      //   data: {
      //       "name": name,
      //       "phone": phone,
      //       "email": email,
      //       "others": others,
      //   },
      //   success: function() {
      //     alert("success");
      //   },
      //   error: function() {
      //     alert("failed");
      //   },
      // });
      //axios.defaults.crossDomain = true;
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      axios.post('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzgSFB3HUKO9eSnROjtv-TWtfttmxqxsUmNcOTSnlBkGPBA17O6IAtsYrN4wm3okxdT/exec', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        others: this.others,
      })
      .then((response) => {
        console.log(response)
        alert('成功');
      });
    }
  },
}
</script>

<style>
.bg-header {
  background: url('../assets/bg.jpg') center center no-repeat;
  background-attachment: fixed;
}

.bg-quote {
  background: url('../assets/shoes.jpg') center center no-repeat;
  background-attachment: fixed;
}

.bg-info {
  background: #F1F1E8;
}

.form-olive-bg {
  background-color: #85915E;
}

.info-olive {
  color: #85915E;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: none;
  -webkit-box-shadow: none;
  transition: background-color 5000s ease-in-out 0s;
}
</style>