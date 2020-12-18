<template>
    <b-card class="ticket-card">
        <b-card-text>
        <p class="my-3">
            Enter the Ticket number or Batch number to check the<br />current
            status of your game.
        </p>
        <b-form>
            <b-form-group>
            <b-form-radio-group>
                <b-form-radio inline>Ticket Number</b-form-radio>
                <b-form-radio inline>Batch Number</b-form-radio>
            </b-form-radio-group>
            </b-form-group>
            <b-form-group>
            <b-form-input type="number"></b-form-input>
            </b-form-group>
            <b-button class="cmn-btn btn-md" style="color: white">Check Results</b-button>
        </b-form>
        </b-card-text>
    </b-card>
</template>

<script src="./ResultChecker.ts"></script>

<style scoped>
.ticket-card {
  max-width: 600px;
  border: none;
  box-shadow: 0 10px 10px rgba(0,0,0,0.2), 0 -1px 5px rgba(0,0,0,0.2);
}
</style>