import mods.itemstages.ItemStages;
//ItemStages.createModRestriction(String modid, Predicate<IItemStack>, String... requiredStages);
for item in <tag:items:forgedingears:stages/stone_age/all> {
    ItemStages.restrict(item.defaultInstance, "stone_age");
}