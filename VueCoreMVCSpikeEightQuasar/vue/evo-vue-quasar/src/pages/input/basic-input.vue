<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 5300px"> 

            <q-input color="orange" standout bottom-slots v-model="text" label="Label" counter clearable>
                <template v-slot:prepend>
                    <q-icon name="place" />
                </template>
                <template v-slot:append>
                    <q-icon name="favorite" />
                </template>

                <template v-slot:hint>
                    Field hint
                </template>
            </q-input>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'basic-input',
        data() {
            return {
                text: ''
            }
        }
    }
</script>