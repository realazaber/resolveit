<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";

import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import Step from "primevue/step";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import StepPanel from "primevue/steppanel";
import type { AccountPhase, GroupsPhase, SetupDto } from "@/dtos/setup.dto";

let accountPhase: AccountPhase = {} as AccountPhase;
let groupsPhase: GroupsPhase = {} as GroupsPhase;
let setupDto: SetupDto = { accountPhase, groupsPhase } as SetupDto;
</script>

<template>
  <div class="card flex justify-center">
    <Stepper value="1" class="basis-[50rem]">
      <StepList>
        <Step value="1">Account Setup</Step>
        <Step value="2">Groups setup</Step>
        <Step value="3">Confirm</Step>
      </StepList>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col min-h-48">
            <div
              class="rounded flex-auto flex justify-center items-center font-medium"
            >
              <div>
                <div class="form-group flex sm:flex-row flex-col">
                  <InputGroup>
                    <InputGroupAddon>
                      <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                      <InputText
                        id="firstName"
                        v-model="setupDto.accountPhase.firstName"
                      />
                      <label for="firstName">First name</label>
                    </FloatLabel></InputGroup
                  >
                  <InputGroup>
                    <InputGroupAddon>
                      <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                      <InputText
                        id="lastName"
                        v-model="setupDto.accountPhase.lastName"
                      />
                      <label for="lastName">Last name</label>
                    </FloatLabel></InputGroup
                  >
                </div>
                <div class="form-group flex sm:flex-row flex-col">
                  <InputGroup>
                    <InputGroupAddon>
                      <i class="pi pi-envelope"></i
                    ></InputGroupAddon>
                    <FloatLabel variant="on">
                      <InputText
                        id="email"
                        v-model="setupDto.accountPhase.email"
                      />
                      <label for="email">Email</label>
                    </FloatLabel></InputGroup
                  >
                  <InputGroup>
                    <InputGroupAddon>
                      <i class="pi pi-phone"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                      <InputNumber
                        id="phone"
                        v-model="setupDto.accountPhase.phone"
                      />
                      <label for="phone">Phone</label>
                    </FloatLabel></InputGroup
                  >
                </div>
                <div class="form-group flex sm:flex-row flex-col">
                  <InputGroup>
                    <InputGroupAddon>
                      <i class="pi pi-lock"></i
                    ></InputGroupAddon>
                    <FloatLabel variant="on">
                      <InputText
                        id="password"
                        v-model="setupDto.accountPhase.password"
                      />
                      <label for="password">Password</label>
                    </FloatLabel></InputGroup
                  >
                  <InputGroup>
                    <InputGroupAddon>
                      <i class="pi pi-lock"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                      <InputText
                        id="confirmPassword"
                        v-model="setupDto.accountPhase.confirmPassword"
                      />
                      <label for="confirmPassword">Confirm Password</label>
                    </FloatLabel></InputGroup
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="flex pt-6 justify-end">
            <Button
              class="text-white"
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('2')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col min-h-48">
            <div
              class="rounded flex-auto flex justify-center items-center font-medium"
            >
              <span
                >Add users to groups for easier management of teams, you can
                make changes to this later on.</span
              >
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              class="text-white"
              label="Back"
              icon="pi pi-arrow-left"
              @click="activateCallback('1')"
            />
            <Button
              class="text-white"
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('3')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col min-h-48">
            <div class="flex-auto flex justify-center items-center font-medium">
              Confirm
            </div>
          </div>
          <div class="pt-6">
            <Button
              class="text-white"
              label="Back"
              icon="pi pi-arrow-left"
              @click="activateCallback('2')"
            />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>
