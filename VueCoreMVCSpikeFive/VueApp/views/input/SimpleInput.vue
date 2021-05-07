<template>
    <div class="text-center">
        <h1 class="display-4">Perform Input Example</h1>

        <div id="vueInput">
            <div style="margin-top:50px;">
                <label class="label">Input Value is :  {{ form.value }}</label>
                <div class="control">
                    <input v-model="form.value" class="input" type="text" placeholder="Text input">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    value: ''
                }
            }         

        }
    }
</script>