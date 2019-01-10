<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-avatar>
                            <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>仲村 政弘</v-list-tile-title>
                            <v-list-tile-sub-title>ユーザー名</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">web</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>ninben</v-list-tile-title>
                            <v-list-tile-sub-title>アカウント名</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">location_on</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>福岡市</v-list-tile-title>
                            <v-list-tile-sub-title>居住エリア</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>