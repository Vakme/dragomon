<template>
    <div class="feedback">
        <md-button class="md-raised md-primary fixed-btn" @click="showDialog = true">Leave feedback</md-button>
        <md-dialog :md-active.sync="showDialog" class="feedback-dialog">
            <md-dialog-title>Submit your opinion</md-dialog-title>
            <form @submit="onSubmit" @reset="onReset" class="form">
                <md-field id="emailInputLabel"
                              description="We'll never share your email with anyone else.">
                    <label for="emailInput">Email address:</label>
                    <md-input id="emailInput"
                                  type="email"
                                  v-model="form.email"
                                  required>
                    </md-input>
                </md-field>
                <md-field id="textInputLabel">
                    <label for="textInput">Your opinion:</label>
                    <md-textarea id="textInput"
                                     type="text"
                                     v-model="form.text"
                                     required>
                    </md-textarea>
                </md-field>
                <md-button type="submit" class="md-primary">Submit</md-button>
                <md-button type="reset" class="md-accent">Reset</md-button>
            </form>
        </md-dialog>
    </div>
</template>

<script>
  export default {
    name: "feedback",
    data: function () {
      return {
        showDialog: false,
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
        this.showDialog = false;
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
        this.showDialog = false;

      }
    }
  }
</script>

<style scoped>
    .feedback-dialog {
        padding: 20px;
        min-width: 300px;
    }
    .fixed-btn {
        position: fixed;
        right: 50px;
        bottom: 50px;
    }
    .form {
        text-align: left;
    }
</style>