<template>
  <div class="app-container">
    <div class="demo-card">
      <h2>ShowMore Demo</h2>

      <div class="demo-section">
        <label>Prop: length</label>
        <show-more :length="20">
          This paragraph demonstrates truncation at 20 characters. Only part of it is shown.
        </show-more>
        <show-more :length="40">
          This paragraph demonstrates truncation at 40 characters. A longer preview is visible here.
        </show-more>
      </div>

      <div class="demo-section">
        <label>Prop: showMoreEnabled</label>
        <show-more :showMoreEnabled="true">
          When enabled, a "Show more" button appears after the truncated text.
        </show-more>
        <show-more :showMoreEnabled="false" :length="40">
          When disabled, no button is shown and the text stays truncated.
        </show-more>
      </div>

      <div class="demo-section">
        <label>Prop: showMoreText</label>
        <show-more showMoreText=" Expand">
          Here the expand button label is customized to " Expand".
        </show-more>
      </div>

      <div class="demo-section">
        <label>Prop: showLessEnabled</label>
        <show-more :showLessEnabled="true" showLessText="Collapse">
          After expansion, a "Collapse" button appears to shrink the text back.
        </show-more>
        <show-more :showLessEnabled="false">
          Here the collapse option is disabled, so the expanded text stays open.
        </show-more>
      </div>

      <div class="demo-section">
        <label>Prop: showLessText</label>
        <show-more :showLessEnabled="true" showLessText="▲ Hide">
          The collapse button text is customized to "▲ Hide".
        </show-more>
      </div>


      <div class="demo-section">
        <label>Prop: showMoreBtnStyle</label>
        <show-more :showMoreBtnStyle="{ color: '#e91e63', fontWeight: 'bold' }">
          The "Show more" and "Less" buttons are styled with custom CSS.
        </show-more>
      </div>

      <div class="demo-section">
        <label>Prop: showTooltip</label>
        <show-more :showTooltip="true">
          Hover over this text to see the tooltip in action.
        </show-more>
        <show-more :showTooltip="false">
          Tooltip is disabled for this text, so nothing appears on hover.
        </show-more>
      </div>

      <div class="demo-section">
        <label>Props: tooltipHeader</label>
        <show-more tooltipHeader="Additional details" :showTooltip="true">
          This is some text that demonstrates the tooltipHeader prop. Hover to see a tooltip with a custom header.
        </show-more>
      </div>

      <div class="demo-section">
        <label>Prop: tooltipColor</label>
        <show-more tooltipColor="#4caf50">
          This tooltip is styled with #4caf50 color.
        </show-more>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ShowMore } from '../src/index.js'
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
}

.demo-card {
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  min-width: 340px;
  max-width: 480px;
  text-align: center;
}

.demo-section {
  margin-bottom: 24px;
  text-align: left;
}

.demo-section label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #1976d2;
}

h2 {
  margin-bottom: 18px;
  color: #1976d2;
  font-weight: 700;
}
</style>
