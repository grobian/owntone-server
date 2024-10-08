<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-four-fifths has-text-centered-mobile">
            <h1 class="title is-4" v-text="configuration.library_name" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-four-fifths">
            <div class="content">
              <nav class="level is-mobile">
                <!-- Left side -->
                <div class="level-left">
                  <div class="level-item">
                    <p class="title is-5" v-text="$t('page.about.library')" />
                  </div>
                </div>
                <!-- Right side -->
                <div class="level-right">
                  <div v-if="library.updating">
                    <a
                      class="button is-small is-loading"
                      v-text="$t('page.about.update')"
                    />
                  </div>
                  <div v-else>
                    <a
                      class="button is-small"
                      @click="showUpdateDialog()"
                      v-text="$t('page.about.update')"
                    />
                  </div>
                </div>
              </nav>
              <table class="table">
                <tbody>
                  <tr>
                    <th
                      class="has-text-left"
                      v-text="$t('page.about.artists')"
                    />
                    <td
                      class="has-text-right"
                      v-text="$filters.number(library.artists)"
                    />
                  </tr>
                  <tr>
                    <th
                      class="has-text-left"
                      v-text="$t('page.about.albums')"
                    />
                    <td
                      class="has-text-right"
                      v-text="$filters.number(library.albums)"
                    />
                  </tr>
                  <tr>
                    <th
                      class="has-text-left"
                      v-text="$t('page.about.tracks')"
                    />
                    <td
                      class="has-text-right"
                      v-text="$filters.number(library.songs)"
                    />
                  </tr>
                  <tr>
                    <th
                      class="has-text-left"
                      v-text="$t('page.about.total-playtime')"
                    />
                    <td
                      class="has-text-right"
                      v-text="
                        $filters.durationInDays(library.db_playtime * 1000)
                      "
                    />
                  </tr>
                  <tr>
                    <th
                      class="has-text-left"
                      v-text="$t('page.about.updated')"
                    />
                    <td class="has-text-right">
                      <span
                        v-text="
                          $t('page.about.updated-on', {
                            time: $filters.timeFromNow(library.updated_at)
                          })
                        "
                      />
                      (<span
                        class="has-text-grey"
                        v-text="$filters.datetime(library.updated_at)"
                      />)
                    </td>
                  </tr>
                  <tr>
                    <th
                      class="has-text-left"
                      v-text="$t('page.about.uptime')"
                    />
                    <td class="has-text-right">
                      <span
                        v-text="$filters.timeFromNow(library.started_at, true)"
                      />
                      (<span
                        class="has-text-grey"
                        v-text="$filters.datetime(library.started_at)"
                      />)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-four-fifths">
            <div class="content has-text-centered-mobile">
              <p
                class="is-size-7"
                v-text="
                  $t('page.about.version', { version: configuration.version })
                "
              />
              <p
                class="is-size-7"
                v-text="
                  $t('page.about.compiled-with', {
                    options: configuration.buildoptions.join(', ')
                  })
                "
              />
              <i18n-t
                tag="p"
                class="is-size-7"
                keypath="page.about.built-with"
                scope="global"
              >
                <template #bulma>
                  <a href="https://bulma.io">Bulma</a>
                </template>
                <template #mdi>
                  <a href="https://pictogrammers.com/library/mdi/">
                    Material Design Icons
                  </a>
                </template>
                <template #vuejs>
                  <a href="https://vuejs.org/">Vue.js</a>
                </template>
                <template #axios>
                  <a href="https://github.com/axios/axios">axios</a>
                </template>
                <template #others>
                  <a
                    href="https://github.com/owntone/owntone-server/network/dependencies"
                    v-text="$t('page.about.more')"
                  />
                </template>
              </i18n-t>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useConfigurationStore } from '@/stores/configuration'
import { useLibraryStore } from '@/stores/library'
import { useUIStore } from '@/stores/ui'

export default {
  name: 'PageAbout',

  setup() {
    return {
      configurationStore: useConfigurationStore(),
      libraryStore: useLibraryStore(),
      uiStore: useUIStore()
    }
  },

  computed: {
    configuration() {
      return this.configurationStore.$state
    },
    library() {
      return this.libraryStore.$state
    }
  },

  methods: {
    showUpdateDialog() {
      this.uiStore.show_update_dialog = true
    }
  }
}
</script>

<style></style>
