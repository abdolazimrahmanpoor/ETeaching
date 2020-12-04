<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="5">
          <div class="section_title text-center">
            <p class="cl">کلاس ها</p>
            <h2>کلاس های خصوصی</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" lg="4" v-for="course in courses" :key="course.id">
          <v-card :loading="loading" class="mx-auto my-12" max-width="360">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="320" :src="course.image"></v-img>

            <v-card-title>
              <v-btn tile dark color="deep-orange">
                {{ course.title }}
              </v-btn>
              <v-spacer></v-spacer>
              <h3 class="deep-orange--text">{{ course.price }}</h3>
            </v-card-title>
            <v-card-text>
              <div class="my-4  title">
                {{ course.title }}
              </div>

              <div>{{ course.text }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <div class="author_info_text">
                <span>مدیریت با</span>
                <br />
                <a class="subtitle" href="#">{{ course.authorName }}</a>
              </div>

              <v-avatar class="mr-4">
                <img :src="course.authorPhoto" alt="John" />
              </v-avatar>

              <v-spacer></v-spacer>
              <span class="black--text text--lighten-2 caption mr-2">
                ({{ course.rating }}) امتیاز
              </span>
              <br />
              <v-rating
                :value="course.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.section_title {
  margin: 60px 0;
  h2 {
    font-size: 32px;
    color: $heading_color;
    line-height: 37px;
    font-weight: 400;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      bottom: -30px;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      width: 80px;
      height: 2px;
      background-color: $btn_bg;
      @media #{$small_mobile} {
        bottom: -14px;
      }
      @media #{$large_mobile} {
        buttom: -14px;
      }
      @media #{$tab_device} {
        bottom: -14px;
      }
      @media #{$medium_device} {
        bottom: -14px;
      }
    }
    @media #{$small_mobile} {
      font-size: 25px;
      line-height: 35px;
    }
    @media #{$large_mobile} {
      font-size: 25px;
      line-height: 35px;
    }
    @media #{$tab_device} {
      font-size: 30px;
      line-height: 40px;
    }
    @media #{$medium_device} {
      font-size: 35px;
      line-height: 40px;
    }
  }
  p {
    text-align: right;
    font-weight: 500;
    line-height: 11px;
    margin-bottom: 26px;
    @media #{$small_mobile} {
      margin-bottom: 10px;
    }
    @media #{$large_mobile} {
      margin-bottom: 10px;
    }
    @media #{$tab_device} {
      margin-bottom: 10px;
    }
    @media #{$medium_device} {
      margin-bottom: 10px;
    }
  }
}
.author_info_text {
  a {
    color: $heading_color;
    text-decoration: none;
  }
}
.title {
  color: $heading_color;
}

</style>


<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    courses: [
      {
        id: 1,
        title: "توسعه وب",
        price: "130,000",
        text:
          "که گفته تاریکی آن زندگی به ماهی هایی است که در آن همه ماهی های کنار هم نامیده می شون",
        image: "img/special_cource_1.png",
        authorPhoto: "img/author/author_1.png",
        authorName: "جمال احمدی",
        rating: 5,
      },
      {
        id: 2,
        title: "طراحی",
        price: "160,000",
        text:
          "که گفته تاریکی آن زندگی به ماهی هایی است که در آن همه ماهی های کنار هم نامیده می شون",
        image: "img/special_cource_2.png",
        authorPhoto: "img/author/author_2.png",
        authorName: "ارسلان نامدار",
        rating: 2.5,
      },
      {
        id: 3,
        title: "وردپرس",
        price: "200,000",
        text:
          "که گفته تاریکی آن زندگی به ماهی هایی است که در آن همه ماهی های کنار هم نامیده می شون",
        image: "img/special_cource_3.png",
        authorPhoto: "img/author/author_3.png",
        authorName: "آرش فتاحی",
        rating: 3.5,
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
