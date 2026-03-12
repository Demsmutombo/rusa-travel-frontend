<template>
  <SidebarProvider>
  <div class="min-h-screen xl:flex">
    <!-- Sidebar Super Admin -->
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
        <router-link to="/admin">
          <img
            v-if="isExpanded || isHovered || isMobileOpen"
            class="dark:hidden"
            src="/images/logo/logo.svg"
            alt="Rusa Travel Admin"
            width="150"
            height="40"
          />
          <img
            v-else
            src="/images/logo/logo.svg"
            alt="Rusa Travel Admin"
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
                  Rusa Travel Admin
                </template>
                <span v-else>...</span>
              </h2>
              <ul class="flex flex-col gap-4">
                <li>
                  <router-link
                    to="/admin/dashboard"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/admin/dashboard'),
                        'menu-item-inactive': !isActive('/admin/dashboard'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/admin/dashboard')
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
                    >Dashboard Rusa Travel</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/admin/agencies"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/admin/agencies'),
                        'menu-item-inactive': !isActive('/admin/agencies'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/admin/agencies')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Agences</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/admin/transactions"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/admin/transactions'),
                        'menu-item-inactive': !isActive('/admin/transactions'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/admin/transactions')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Transactions</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/admin/users"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/admin/users'),
                        'menu-item-inactive': !isActive('/admin/users'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/admin/users')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Utilisateurs</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/admin/disputes"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/admin/disputes'),
                        'menu-item-inactive': !isActive('/admin/disputes'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/admin/disputes')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Litiges</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/admin/settings"
                    :class="[
                      'menu-item group',
                      {
                        'menu-item-active': isActive('/admin/settings'),
                        'menu-item-inactive': !isActive('/admin/settings'),
                      },
                    ]"
                  >
                    <span
                      :class="[
                        isActive('/admin/settings')
                          ? 'menu-item-icon-active'
                          : 'menu-item-icon-inactive',
                      ]"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span
                      v-if="isExpanded || isHovered || isMobileOpen"
                      class="menu-item-text"
                    >Configuration</span>
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
