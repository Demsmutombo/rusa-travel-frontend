<template>
  <SidebarProvider>
  <div class="min-h-screen xl:flex">
    <!-- Sidebar Transporteur -->
    <aside
      :class="[
        'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200',
        {
          'lg:w-[290px]': isExpanded || isMobileOpen || isHovered,
          'lg:w-[90px]': !isExpanded && !isHovered,
          'translate-x-0 w-[290px]': isMobileOpen,
          '-translate-x-full': !isMobileOpen,
          'lg:translate-x-0': true,
        },
      ]"
      @mouseenter="!isExpanded && (isHovered = true)"
      @mouseleave="isHovered = false"
    >
      <div
        :class="[
          'py-8 flex',
          !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
        ]"
      >
        <router-link to="/carrier">
          <img
            v-if="isExpanded || isHovered || isMobileOpen"
            class="dark:hidden"
            src="/images/logo/logo.svg"
            alt="Rusa Travel"
            width="150"
            height="40"
          />
          <img
            v-else
            src="/images/logo/logo.svg"
            alt="Rusa Travel"
            width="32"
            height="32"
          />
        </router-link>
      </div>

      <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav class="mb-6">
          <div class="flex flex-col gap-4">
            <div>
              <h2
                :class="[
                  'mb-4 text-xs uppercase flex leading-[20px] text-gray-400',
                  !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
                ]"
              >
                <template v-if="isExpanded || isHovered || isMobileOpen">
                  Rusa Travel Transporteur
                </template>
                <span v-else>...</span>
              </h2>
              <ul class="flex flex-col gap-4">
                <li>
                  <router-link
                    to="/carrier/dashboard"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/carrier/dashboard'),
                        'menu-item-inactive': !isActive('/carrier/dashboard'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/carrier/dashboard')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Dashboard Rusa Travel</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/carrier/buses"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/carrier/buses'),
                        'menu-item-inactive': !isActive('/carrier/buses'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/carrier/buses')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Mes Bus</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/carrier/trips"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/carrier/trips'),
                        'menu-item-inactive': !isActive('/carrier/trips'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/carrier/trips')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Trajets</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/carrier/bookings"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/carrier/bookings'),
                        'menu-item-inactive': !isActive('/carrier/bookings'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/carrier/bookings')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Réservations</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/carrier/statistics"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/carrier/statistics'),
                        'menu-item-inactive': !isActive('/carrier/statistics'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/carrier/statistics')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Statistiques</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <div
      class="flex-1 transition-all duration-300 ease-in-out"
      :class="[isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]']"
    >
      <app-header />
      <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import SidebarProvider from './SidebarProvider.vue'
import AppHeader from './AppHeader.vue';
import { useSidebar } from '@/composables/useSidebar';

const route = useRoute();
const { isExpanded, isMobileOpen, isHovered } = useSidebar();

const isActive = (path: string) => route.path === path;
</script>
