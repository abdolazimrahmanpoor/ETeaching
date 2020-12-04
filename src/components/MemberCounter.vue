<template>
  <div class="member_counter">
    <v-conainer>
      <v-row>
        <v-col cols="12" lg="3" sm="6">
          <div class="single_member_counter">
            <span class="counter">1024</span>
            <h4>تمام مدرسان</h4>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="single_member_counter">
            <span class="counter">960</span>
            <h4>تمام دانش اموزان</h4>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="single_member_counter">
            <span class="counter">1020</span>
            <h4>دانش اموزان انلاین</h4>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="single_member_counter">
            <span class="counter">820</span>
            <h4>دانش اموزان افلاین</h4>
          </div>
        </v-col>
      </v-row>
    </v-conainer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.member_counter {
  background: linear-gradient(
    to right,
    rgb(238, 57, 15) 0%,
    rgb(249, 183, 0) 100%
  );

  padding: 73px 0px 73px;

  @media #{$small_mobile} {
    padding: 50px 0px 60px;
  }

  @media #{$large_mobile} {
    padding: 50px 0px 60px;
  }

  @media #{$tab_device} {
    padding: 50px 0px 60px;
  }

  @media #{$medium_device} {
    padding: 73px 0px 73px;
  }

  .single_member_counter {
    text-align: center;
    @media #{$small_mobile} {
      margin: 20px 0px;
    }

    @media #{$large_mobile} {
      margin: 20px 0px;
    }

    @media #{$tab_device} {
      margin: 20px 0px;
    }

    @media #{$medium_device} {
      margin: 20px 0px;
    }

    span {
      font-size: 60px;
      font-weight: 700;
      color: $white_color;

      @media #{$small_mobile} {
        line-height: 67px;
        font-size: 40px;
      }

      @media #{$large_mobile} {
        line-height: 67px;
        font-size: 40px;
      }

      @media #{$tab_device} {
        line-height: 67px;
        font-size: 40px;
      }

      @media #{$medium_device} {
        line-height: 67px;
        font-size: 40px;
      }
    }

    h4 {
      color: $white_color;
      font-size: 24px;
      font-weight: 600;
      margin-top: 28px;
      position: relative;

      &:after {
        position: absolute;
        left: 0;
        top: -20px;
        right: 0;
        margin: 0 auto;
        width: 60px;
        height: 1px;
        background-color: $white_color;
        content: "";

        @media #{$small_mobile} {
          top: -10px;
        }

        @media #{$large_mobile} {
          top: -10px;
        }

        @media #{$tab_device} {
          top: -10px;
        }

        @media #{$medium_device} {
          top: -10px;
        }
      }
      @media #{$small_mobile} {
        margin-top: 10px;
      }

      @media #{$large_mobile} {
        margin-top: 10px;
      }

      @media #{$tab_device} {
        margin-top: 10px;
      }

      @media #{$medium_device} {
        margin-top: 10px;
      }
    }
  }
}
</style>