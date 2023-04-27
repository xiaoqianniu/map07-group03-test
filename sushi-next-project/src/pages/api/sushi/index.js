export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(array)
  } else if (req.method === 'POST') {
    res.status(201).json({ message: generateRandomString(15) })
  } else {
    res.status(405).json({ message: 'Method not allowed.' })
  }
}

const array = [
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: '556a657a-e8d8-57d0-abfd-b6edc52ac005',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID':
      'cd5acfde-64e1-4b5d-907d-84fc776c12df',
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Buy 1 get 1 free',
    'payload.standardItemsPayload.title.textFormat':
      '<span><img src="https://duyt4h9nfnj50.cloudfront.net/bazaar/store_promotion_tags/promo-tag-3x.png" width="24" height="24" vertical-align="middle"/> Buy 1 get 1 free</span>',
    'payload.standardItemsPayload.catalogItems[0].title':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      '6f5811af-01c1-46e6-aa29-02eb06e2ec1c',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/3a939708e217ff955a19c9abc7cb5401/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'Thon, avocat, tempura, masago orange,mayo l\u00e9g\u00e8re \u00e9pic\u00e9e et sauce \u00e9pic\u00e9e, s\u00e9same / Tuna,\navocado, tempura, orange masago, spicy light mayo & spicy sauce, sesame',
    'payload.standardItemsPayload.catalogItems[0].price': 1499,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      '556a657a-e8d8-57d0-abfd-b6edc52ac005',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$14.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$14.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$14.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type':
      'buyXGetYItemPromotion',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount': 10,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'Thon, avocat, tempura, masago orange,mayo l\u00e9g\u00e8re \u00e9pic\u00e9e et sauce \u00e9pic\u00e9e, s\u00e9same / Tuna,\navocado, tempura, orange masago, spicy light mayo & spicy sauce, sesame',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">Thon, avocat, tempura, masago orange,mayo l\u00e9g\u00e8re \u00e9pic\u00e9e et sauce \u00e9pic\u00e9e, s\u00e9same / Tuna,\navocado, tempura, orange masago, spicy light mayo &amp; spicy sauce, sesame</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      'cd5acfde-64e1-4b5d-907d-84fc776c12df',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      'EATS',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      'LABEL_SMALL',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$14.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$14.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder': null,
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: '7e12b8f3-b7cd-50a8-945c-214c32bc3482',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Picked for you',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      'eaac9649-dad4-4144-b909-edaf064604bc',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/de726add222709c80dbf05f32de076f6/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'Avocat, s\u00e9same / Avocado, sesame',
    'payload.standardItemsPayload.catalogItems[0].price': 495,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      '7e12b8f3-b7cd-50a8-945c-214c32bc3482',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$4.95',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$4.95</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$4.95',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Hosomaki Avocado (6 mcx / 6 pcs) </span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type': null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'Avocat, s\u00e9same / Avocado, sesame',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">Avocat, s\u00e9same / Avocado, sesame</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      null,
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$4.95',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$4.95',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder': null,
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: '31099731-4c61-490a-ae1e-d5854230b31d',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text':
      'Entr\u00e9es et Salades / Appetizers and Salad',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title': 'Takoyaki(5mcx)',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      'c172cea5-1c5e-4000-86c3-dbbd721c93bd',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/d3897dce9618d797a6f05b7f9704e661/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'baked wheat cake of octopus, sauce teriyaki, sauce Japanese',
    'payload.standardItemsPayload.catalogItems[0].price': 899,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      '31099731-4c61-490a-ae1e-d5854230b31d',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$8.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$8.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$8.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Takoyaki(5mcx)',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Takoyaki(5mcx)</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Takoyaki(5mcx)',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type': null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'baked wheat cake of octopus, sauce teriyaki, sauce Japanese',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">baked wheat cake of octopus, sauce teriyaki, sauce Japanese</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      null,
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$8.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$8.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Takoyaki(5mcx)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Takoyaki(5mcx)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      'confidence_builders_popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': 'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat':
      '<span>Popular</span>',
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder':
      'PILL',
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: '7629f900-4385-453d-a79d-69cdc1b2ee07',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'SMALL COMBO',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title':
      ' COMBO KAMIKAZE(11MCX)',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      'de71babf-2cee-4a2d-9b0e-eb4dad5bcd98',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/d7fd9d623ac4fbeaad61e7e04be1a3f6/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      '5 mcx kamikaze salmon, 3mcx Hosomaki avocado, 3mcx Hosomaki kappa.',
    'payload.standardItemsPayload.catalogItems[0].price': 1299,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 2,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'LIST',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      '7629f900-4385-453d-a79d-69cdc1b2ee07',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$12.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$12.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$12.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      ' COMBO KAMIKAZE(11MCX)',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span> COMBO KAMIKAZE(11MCX)</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      ' COMBO KAMIKAZE(11MCX)',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type': null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      '5 mcx kamikaze salmon, 3mcx Hosomaki avocado, 3mcx Hosomaki kappa.',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">5 mcx kamikaze salmon, 3mcx Hosomaki avocado, 3mcx Hosomaki kappa.</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      null,
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$12.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$12.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      ' COMBO KAMIKAZE(11MCX)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      ' COMBO KAMIKAZE(11MCX)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      'confidence_builders_popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': 'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat':
      '<span>Popular</span>',
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder':
      'PILL',
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: 'bc63949a-cc32-4d3f-b644-941fcde89bc7',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Sushi combo',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title': 'Combo A(16MCX)',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      '0ac724da-a8da-42be-ba59-4d5bc06b7d4a',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/84cc41b90cd174f1e4dad96ba43aa0ef/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      '5 mcx kamikaze salmon, 5mcx spicy shrimp, 3mcx Hosomaki avocado, 3mcx Hosomaki kappa.',
    'payload.standardItemsPayload.catalogItems[0].price': 2899,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      'bc63949a-cc32-4d3f-b644-941fcde89bc7',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$28.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$28.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$28.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Combo A(16MCX)',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Combo A(16MCX)</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Combo A(16MCX)',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type':
      'buyXGetYItemPromotion',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount': 10,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      '5 mcx kamikaze salmon, 5mcx spicy shrimp, 3mcx Hosomaki avocado, 3mcx Hosomaki kappa.',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">5 mcx kamikaze salmon, 5mcx spicy shrimp, 3mcx Hosomaki avocado, 3mcx Hosomaki kappa.</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      'cd5acfde-64e1-4b5d-907d-84fc776c12df',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      'EATS',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      'LABEL_SMALL',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$28.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$28.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Combo A(16MCX)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Combo A(16MCX)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder': null,
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: 'fab59ac5-e355-4284-b7cd-8a327fe36342',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'SUSHI FLOWER',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title': 'SAUMON FLOWER(6MCX)',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      '8d0f9d72-4da0-4356-a28a-22359bcf262d',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/90c4aaa3514c0201096769d436847be9/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'Saumon saisi \u00e0 la torche, avocat, tempura, masago rouge, mayo l\u00e9g\u00e8re \u00e9pic\u00e9e, s\u00e9same / Torch-seared salmon, avocado, tempura, red masago, spicy light mayo, sesame\n',
    'payload.standardItemsPayload.catalogItems[0].price': 1599,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      'fab59ac5-e355-4284-b7cd-8a327fe36342',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$15.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$15.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$15.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'SAUMON FLOWER(6MCX)',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>SAUMON FLOWER(6MCX)</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'SAUMON FLOWER(6MCX)',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type': null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'Saumon saisi \u00e0 la torche, avocat, tempura, masago rouge, mayo l\u00e9g\u00e8re \u00e9pic\u00e9e, s\u00e9same / Torch-seared salmon, avocado, tempura, red masago, spicy light mayo, sesame\n',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">Saumon saisi \u00e0 la torche, avocat, tempura, masago rouge, mayo l\u00e9g\u00e8re \u00e9pic\u00e9e, s\u00e9same / Torch-seared salmon, avocado, tempura, red masago, spicy light mayo, sesame\n</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      null,
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$15.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$15.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'SAUMON FLOWER(6MCX)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'SAUMON FLOWER(6MCX)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder': null,
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: 'ea5e850a-9ec2-4fc3-a93a-b19443dda87b',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Poke',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title':
      'Poke saumon/Salmon Poke',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      'de7b7615-3124-4fa3-8ed9-f65e8c8eed56',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/3297f74d6171ba1938331d682f2ce1c5/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'Saumon, avocat, caviar, concombre, tempura, laitue, chou rouge,\ncarotte,edamame,oignon vert, sauce ponzu, mayo l\u00e9g\u00e8re \u00e9pic\u00e9e, sauce\nteryaki, mayo japonaise, s\u00e9same / Salmon, avocado, red masago,\ncucumber,tempura, lettuce, red cabbage, carrot,edamame,green onion, ponzu\nsauce, spicy light mayo, teryaki sauce, japanese mayo, sesame',
    'payload.standardItemsPayload.catalogItems[0].price': 1899,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': true,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      'ea5e850a-9ec2-4fc3-a93a-b19443dda87b',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$18.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$18.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$18.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Poke saumon/Salmon Poke',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Poke saumon/Salmon Poke</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Poke saumon/Salmon Poke',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type': null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'Saumon, avocat, caviar, concombre, tempura, laitue, chou rouge,\ncarotte,edamame,oignon vert, sauce ponzu, mayo l\u00e9g\u00e8re \u00e9pic\u00e9e, sauce\nteryaki, mayo japonaise, s\u00e9same / Salmon, avocado, red masago,\ncucumber,tempura, lettuce, red cabbage, carrot,edamame,green onion, ponzu\nsauce, spicy light mayo, teryaki sauce, japanese mayo, sesame',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">Saumon, avocat, caviar, concombre, tempura, laitue, chou rouge,\ncarotte,edamame,oignon vert, sauce ponzu, mayo l\u00e9g\u00e8re \u00e9pic\u00e9e, sauce\nteryaki, mayo japonaise, s\u00e9same / Salmon, avocado, red masago,\ncucumber,tempura, lettuce, red cabbage, carrot,edamame,green onion, ponzu\nsauce, spicy light mayo, teryaki sauce, japanese mayo, sesame</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      null,
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$18.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$18.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Poke saumon/Salmon Poke',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Poke saumon/Salmon Poke',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      'confidence_builders_popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': 'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat':
      '<span>Popular</span>',
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder':
      'PILL',
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: '1ccf3405-8515-49a0-829e-a9a577b3ca4a',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Sumomaki (5 mcx / 5 pcs)',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title': 'Dragon Eye',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      '3bb7b2aa-e1d8-4bd4-95cf-484fdc81b6ed',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/034d1334561d409ab1f48f6f3244bff6/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription': null,
    'payload.standardItemsPayload.catalogItems[0].price': 1599,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      '1ccf3405-8515-49a0-829e-a9a577b3ca4a',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$15.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$15.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$15.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Dragon Eye',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Dragon Eye</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Dragon Eye',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type':
      'buyXGetYItemPromotion',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount': 10,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      'cd5acfde-64e1-4b5d-907d-84fc776c12df',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      'EATS',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      'LABEL_SMALL',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$15.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$15.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Dragon Eye',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Dragon Eye',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder': null,
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: 'c332985a-be45-41ed-8e4a-1a3562d9b221',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Maki (8 mcx / 8 pcs)',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      '6f5811af-01c1-46e6-aa29-02eb06e2ec1c',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/3a939708e217ff955a19c9abc7cb5401/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'Thon, avocat, tempura, masago orange,mayo l\u00e9g\u00e8re \u00e9pic\u00e9e et sauce \u00e9pic\u00e9e, s\u00e9same / Tuna,\navocado, tempura, orange masago, spicy light mayo & spicy sauce, sesame',
    'payload.standardItemsPayload.catalogItems[0].price': 1499,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      'c332985a-be45-41ed-8e4a-1a3562d9b221',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$14.99',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$14.99</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$14.99',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)</span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type':
      'buyXGetYItemPromotion',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity': 1,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount': 10,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'Thon, avocat, tempura, masago orange,mayo l\u00e9g\u00e8re \u00e9pic\u00e9e et sauce \u00e9pic\u00e9e, s\u00e9same / Tuna,\navocado, tempura, orange masago, spicy light mayo & spicy sauce, sesame',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">Thon, avocat, tempura, masago orange,mayo l\u00e9g\u00e8re \u00e9pic\u00e9e et sauce \u00e9pic\u00e9e, s\u00e9same / Tuna,\navocado, tempura, orange masago, spicy light mayo &amp; spicy sauce, sesame</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      'cd5acfde-64e1-4b5d-907d-84fc776c12df',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      'Buy 1, get 1 free',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      'EATS',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      'LABEL_SMALL',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$14.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$14.99',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Maki thon \u00e9pic\u00e9e\uff08spicy thon\uff09(8 mcx / 8 pcs)',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder': null,
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
  {
    type: 'VERTICAL_GRID',
    catalogSectionUUID: 'c9232279-96e0-48ab-adda-38d9d289297b',
    'payload.type': 'standardItemsPayload',
    'payload.standardItemsPayload.spanCount': 2,
    'payload.standardItemsPayload.promoUUID': null,
    'payload.standardItemsPayload.sectionUUID':
      'e2786b28-4b19-47e9-b64d-0c6de6dd10ef',
    'payload.standardItemsPayload.title.text': 'Hosomaki (6mcx / 6pcs)',
    'payload.standardItemsPayload.title.textFormat': null,
    'payload.standardItemsPayload.catalogItems[0].title':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].uuid':
      'eaac9649-dad4-4144-b909-edaf064604bc',
    'payload.standardItemsPayload.catalogItems[0].imageUrl':
      'https://tb-static.uber.com/prod/image-proc/processed_images/de726add222709c80dbf05f32de076f6/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg',
    'payload.standardItemsPayload.catalogItems[0].itemDescription':
      'Avocat, s\u00e9same / Avocado, sesame',
    'payload.standardItemsPayload.catalogItems[0].price': 495,
    'payload.standardItemsPayload.catalogItems[0].spanCount': 1,
    'payload.standardItemsPayload.catalogItems[0].displayType': 'GRID',
    'payload.standardItemsPayload.catalogItems[0].isSoldOut': false,
    'payload.standardItemsPayload.catalogItems[0].hasCustomizations': false,
    'payload.standardItemsPayload.catalogItems[0].numAlcoholicItems': 0,
    'payload.standardItemsPayload.catalogItems[0].subsectionUuid':
      'c9232279-96e0-48ab-adda-38d9d289297b',
    'payload.standardItemsPayload.catalogItems[0].isAvailable': true,
    'payload.standardItemsPayload.catalogItems[0].itemAvailabilityState':
      'UNKNOWN',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.text': '$4.95',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.textFormat':
      '<span>$4.95</span>',
    'payload.standardItemsPayload.catalogItems[0].priceTagline.accessibilityText':
      '$4.95',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.text':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.textFormat':
      '<span>Hosomaki Avocado (6 mcx / 6 pcs) </span>',
    'payload.standardItemsPayload.catalogItems[0].titleBadge.accessibilityText':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.type': null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.buyQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.getQuantity':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemPromotion.buyXGetYItemPromotion.maxRedemptionCount':
      null,
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.text':
      'Avocat, s\u00e9same / Avocado, sesame',
    'payload.standardItemsPayload.catalogItems[0].itemDescriptionBadge.textFormat':
      '<span style="color:#757575">Avocat, s\u00e9same / Avocado, sesame</span>',
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promotionUUID':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.accessibilityText':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].type':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.text':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.style':
      null,
    'payload.standardItemsPayload.catalogItems[0].promoInfo.promoInfoLabel.richTextElements[0].text.text.font.weight':
      null,
    'payload.standardItemsPayload.catalogItems[0].quickAddConfig.position':
      'TOP_TRAILING',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.accessibilityText':
      '$4.95',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.text':
      '$4.95',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.style':
      'PARAGRAPH_SMALL',
    'payload.standardItemsPayload.catalogItems[0].labelPrimary.richTextElements[0].text.text.font.weight':
      'NORMAL',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.accessibilityText':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].type':
      'text',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.predefinedDecorations':
      null,
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.text':
      'Hosomaki Avocado (6 mcx / 6 pcs) ',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.color':
      'CONTENT_PRIMARY',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.style':
      'LABEL_DEFAULT',
    'payload.standardItemsPayload.catalogItems[0].headingPrimary.richTextElements[0].text.text.font.weight':
      'MEDIUM',
    'payload.standardItemsPayload.catalogItems[0].endorsementAnalyticsTag':
      'confidence_builders_popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.text': 'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textFormat':
      '<span>Popular</span>',
    'payload.standardItemsPayload.catalogItems[0].endorsement.accessibilityText':
      'Popular',
    'payload.standardItemsPayload.catalogItems[0].endorsement.textBorder':
      'PILL',
    'payload.standardItemsPayload.subtitle.text': null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].itemQuantityAbbreviation':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].soldByUnit.measurementType':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermittedNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.incrementNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantityNumber':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.minPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.maxPermitted.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.increment.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.base':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].quantityConstraintsV2.defaultQuantity.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.exponent':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.high':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.low':
      null,
    'payload.standardItemsPayload.catalogItems[0].purchaseInfo.purchaseOptions[0].purchasePriceV2.base.unsigned':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconUrl': null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.backgroundColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.iconColor.color':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.alpha':
      null,
    'payload.standardItemsPayload.catalogItems[0].endorsement.textColor.color':
      null,
  },
]

function generateRandomString(length) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
