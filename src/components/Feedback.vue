<template>
    <div>
        <b-btn class="fixed-btn" v-b-modal.feedback variant="dark">Leave feedback</b-btn>

        <!-- Modal Component -->
        <b-modal id="feedback" title="What can I improve?" variant="dark">
            <b-form @submit="onSubmit" @reset="onReset" class="form">
                <b-form-group id="emailInputLabel"
                              label="Email address:"
                              label-for="emailInput"
                              description="We'll never share your email with anyone else.">
                    <b-form-input id="emailInput"
                                  type="email"
                                  v-model="form.email"
                                  required
                                  placeholder="Enter email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="textInputLabel"
                              label="Your opinion:"
                              label-for="textInput">
                    <b-form-textarea id="textInput"
                                  type="text"
                                  v-model="form.text"
                                  required
                                  placeholder="Enter test">
                    </b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
  export default {
    name: "feedback",
    data: function () {
      return {
        form: {
          email: '',
          text: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.text = '';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        });
      }
    }
  }
</script>

<style scoped>
    .fixed-btn {
        position: fixed;
        right: 50px;
        bottom: 50px;
    }
    .form {
        text-align: left;
    }
</style>