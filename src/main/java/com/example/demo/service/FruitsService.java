package com.example.demo.service;

import com.example.demo.entity.Fruits;
import com.example.demo.repository.FruitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FruitsService {

    @Autowired
    private FruitsRepository fruitsRepository;

    // 1. 查询所有水果
    public List<Fruits> getAllFruits() {
        return fruitsRepository.findAll();
    }

    // 2. 根据ID查询水果
    public Optional<Fruits> getFruitsById(Long id) {
        return fruitsRepository.findById(id);
    }

    // 3. 根据SKU编码查询
    public Optional<Fruits> getFruitsBySkuCode(String skuCode) {
        return fruitsRepository.findBySkuCode(skuCode);
    }

    // 4. 根据分类查询
    public List<Fruits> getFruitsByCategory(String category) {
        return fruitsRepository.findByCategory(category);
    }

    // 5. 搜索水果（按名称或SKU模糊查询）
    public List<Fruits> searchFruits(String keyword) {
        return fruitsRepository.findByNameContainingOrSkuCodeContaining(keyword, keyword);
    }

    // 6. 获取上架中的水果
    public List<Fruits> getOnSaleFruits() {
        return fruitsRepository.findByIsOnSaleTrue();
    }

    // 7. 获取低库存水果
    public List<Fruits> getLowStockFruits(Integer threshold) {
        return fruitsRepository.findByStockNumLessThan(threshold);
    }

    // 8. 创建水果
    @Transactional
    public Fruits createFruits(Fruits fruits) {
        // 校验SKU是否已存在
        if (fruitsRepository.existsBySkuCode(fruits.getSkuCode())) {
            throw new IllegalArgumentException("SKU编码已存在: " + fruits.getSkuCode());
        }

        // 校验售价不能低于成本价
        if (fruits.getSalePrice() != null && fruits.getCostPrice() != null) {
            if (fruits.getSalePrice().compareTo(fruits.getCostPrice()) < 0) {
                throw new IllegalArgumentException("售价不能低于成本价");
            }
        }

        // 设置默认值
        LocalDateTime now = LocalDateTime.now();
        fruits.setCreatedTime(now);
        fruits.setUpdatedTime(now);

        // 确保有默认值
        if (fruits.getIsOnSale() == null) {
            fruits.setIsOnSale(true);
        }
        if (fruits.getSortWeight() == null) {
            fruits.setSortWeight(0);
        }
        if (fruits.getStockNum() == null) {
            fruits.setStockNum(0);
        }

        return fruitsRepository.save(fruits);
    }

    // 9. 更新水果
    @Transactional
    public Fruits updateFruits(Long id, Fruits fruitsDetails) {
        return fruitsRepository.findById(id)
                .map(existingFruits -> {
                    // 更新基本信息
                    existingFruits.setName(fruitsDetails.getName());
                    existingFruits.setCategory(fruitsDetails.getCategory());
                    existingFruits.setSubTitle(fruitsDetails.getSubTitle());
                    existingFruits.setUnit(fruitsDetails.getUnit());
                    existingFruits.setShelfLifeDays(fruitsDetails.getShelfLifeDays());
                    existingFruits.setOriginCountry(fruitsDetails.getOriginCountry());
                    existingFruits.setPics(fruitsDetails.getPics());
                    existingFruits.setDetailHtml(fruitsDetails.getDetailHtml());
                    existingFruits.setSortWeight(fruitsDetails.getSortWeight());
                    existingFruits.setIsOnSale(fruitsDetails.getIsOnSale());

                    // 更新价格（需要校验）
                    if (fruitsDetails.getSalePrice() != null && fruitsDetails.getCostPrice() != null) {
                        if (fruitsDetails.getSalePrice().compareTo(fruitsDetails.getCostPrice()) < 0) {
                            throw new IllegalArgumentException("售价不能低于成本价");
                        }
                        existingFruits.setSalePrice(fruitsDetails.getSalePrice());
                        existingFruits.setCostPrice(fruitsDetails.getCostPrice());
                    }

                    // 更新库存
                    if (fruitsDetails.getStockNum() != null) {
                        existingFruits.setStockNum(fruitsDetails.getStockNum());
                    }

                    // 更新SKU（需要唯一性校验）
                    if (fruitsDetails.getSkuCode() != null &&
                            !fruitsDetails.getSkuCode().equals(existingFruits.getSkuCode())) {
                        if (fruitsRepository.existsBySkuCode(fruitsDetails.getSkuCode())) {
                            throw new IllegalArgumentException("SKU编码已存在: " + fruitsDetails.getSkuCode());
                        }
                        existingFruits.setSkuCode(fruitsDetails.getSkuCode());
                    }

                    // 更新时间
                    existingFruits.setUpdatedTime(LocalDateTime.now());

                    return fruitsRepository.save(existingFruits);
                })
                .orElseThrow(() -> new IllegalArgumentException("水果不存在，ID: " + id));
    }

    // 10. 删除水果
    @Transactional
    public boolean deleteFruits(Long id) {
        if (fruitsRepository.existsById(id)) {
            fruitsRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // 11. 上下架状态切换
    @Transactional
    public Fruits toggleSaleStatus(Long id, Boolean status) {
        return fruitsRepository.findById(id)
                .map(fruits -> {
                    fruits.setIsOnSale(status);
                    fruits.setUpdatedTime(LocalDateTime.now());
                    return fruitsRepository.save(fruits);
                })
                .orElseThrow(() -> new IllegalArgumentException("水果不存在，ID: " + id));
    }

    // 12. 更新库存（增加/减少）
    @Transactional
    public Fruits updateStock(Long id, Integer quantity) {
        return fruitsRepository.findById(id)
                .map(fruits -> {
                    Integer currentStock = fruits.getStockNum() != null ? fruits.getStockNum() : 0;
                    Integer newStock = currentStock + quantity;

                    if (newStock < 0) {
                        throw new IllegalArgumentException("库存不足，当前库存: " + currentStock + "，需要减少: " + quantity);
                    }

                    fruits.setStockNum(newStock);
                    fruits.setUpdatedTime(LocalDateTime.now());

                    return fruitsRepository.save(fruits);
                })
                .orElseThrow(() -> new IllegalArgumentException("水果不存在，ID: " + id));
    }

    // 13. 检查库存是否足够
    public boolean checkStock(Long id, Integer required) {
        return fruitsRepository.findById(id)
                .map(fruits -> {
                    Integer stock = fruits.getStockNum() != null ? fruits.getStockNum() : 0;
                    return stock >= required;
                })
                .orElseThrow(() -> new IllegalArgumentException("水果不存在，ID: " + id));
    }

    // 14. 计算毛利率
    public BigDecimal calculateProfitMargin(Long id) {
        return fruitsRepository.findById(id)
                .map(fruits -> {
                    if (fruits.getSalePrice() == null || fruits.getCostPrice() == null ||
                            fruits.getCostPrice().compareTo(BigDecimal.ZERO) == 0) {
                        return BigDecimal.ZERO;
                    }

                    // 毛利率 = (售价 - 成本) / 成本 * 100%
                    BigDecimal profit = fruits.getSalePrice().subtract(fruits.getCostPrice());
                    return profit.divide(fruits.getCostPrice(), 4, BigDecimal.ROUND_HALF_UP)
                            .multiply(new BigDecimal("100"));
                })
                .orElseThrow(() -> new IllegalArgumentException("水果不存在，ID: " + id));
    }

    // 15. 获取水果总数
    public long getFruitsCount() {
        return fruitsRepository.count();
    }

    // 16. 根据排序权重获取水果（用于前端展示）
    public List<Fruits> getFruitsBySortWeight() {
        return fruitsRepository.findAllByOrderBySortWeightDesc();
    }
}