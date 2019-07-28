<template>
  <div class="about">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About
          </h1>
          <h2 class="subtitle">
            This is an about page.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-10 is-offset-1 is-full-mobile is-full-tablet">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Form
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <b-icon icon="dots-vertical"></b-icon>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  <!-- Form -->
                  <b-field horizontal label="Name">
                      <b-input name="subject" expanded></b-input>
                  </b-field>
                  <b-field horizontal label="Member?">
                    <div class="field-body">
                      <b-radio v-model="radio"
                        native-value="Yes">
                        Yes
                      </b-radio>
                      <b-radio v-model="radio"
                        native-value="No">
                        No
                      </b-radio>
                    </div>
                  </b-field>
                  <b-field horizontal label="Subject"
                    type="is-danger"
                    message="Sorry, subject not available.">
                    <b-input name="subject" expanded></b-input>
                  </b-field>
                  <b-field horizontal label="Country">
                    <b-select placeholder="Select a country">
                        <option
                            v-for="option in country"
                            :value="option.id"
                            :key="option.id">
                            {{ option.name }}
                        </option>
                    </b-select>
                  </b-field>
                  <b-field horizontal label="Select date">
                    <b-datepicker
                        placeholder="Click to select..."
                        icon="calendar-today">
                    </b-datepicker>
                  </b-field>
                  <b-field horizontal label="Select time">
                    <b-clockpicker
                        placeholder="Click to select..."
                        icon="clock"
                        hour-format="12">
                    </b-clockpicker>
                  </b-field>
                  <b-field horizontal label="Questions">
                    <b-input type="textarea"
                      minlength="10"
                      maxlength="100"
                      placeholder="Type somethin here..">
                    </b-input>
                  </b-field>
                  <b-field horizontal label="Add family members">
                    <b-taginput
                        v-model="tags"
                        ellipsis
                        icon="label"
                        placeholder="Add family">
                    </b-taginput>
                  </b-field>
                  <!-- <p class="content"><b>Tags:</b> {{ tags }}</p> -->
                  <b-field horizontal label="Upload docs">
                    <b-upload v-model="file">
                      <a class="button is-primary">
                          <b-icon icon="upload"></b-icon>
                          <span>Click to upload</span>
                      </a>
                      <span class="file-name" v-if="file">
                        {{ file.name }}
                      </span>
                    </b-upload>
                  </b-field>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Submit</a>
                <a href="#" class="card-footer-item">Cancel</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-10 is-offset-1 is-full-mobile is-full-tablet">
            
            <b-table
              :data="user"
              :paginated="true"
              :per-page="10"
              current-page.sync="1"
              :pagination-simple="false"
              pagination-position="top"
              default-sort-direction="asc"
              default-sort="user.id"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page">

              <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="user.first_name" label="First Name" sortable>
                    {{ props.row.user.first_name }}
                </b-table-column>

                <b-table-column field="user.last_name" label="Last Name" sortable>
                    {{ props.row.user.last_name }}
                </b-table-column>

                <b-table-column field="date" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Gender">
                    <b-icon size="is-small"
                        :icon="props.row.gender === 'Male' ? 'gender-male' : 'gender-female'">
                    </b-icon>
                    {{ props.row.gender }}
                </b-table-column>
              </template>
            </b-table>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
const country = require('../assets/json/country.json')
const user = require('../assets/json/user.json')

export default {
  data() {
    return { 
      country,
      user,
      file: null,
      radio: 'No',
      tags: [
          'Ahmad',
          'Abu Bakar',
      ],
    }
  }
}
</script>
