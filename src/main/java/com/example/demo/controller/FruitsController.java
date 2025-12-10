// FruitsController.java
package com.example.demo.controller;

import com.example.demo.entity.Fruits;
import com.example.demo.service.FruitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/fruits")
@CrossOrigin(origins = "http://localhost:8081")
public class FruitsController {

    @Autowired
    private FruitsService fruitsService;

    // 1. 获取所有水果
    @GetMapping
    public ResponseEntity<List<Fruits>> getAllFruits() {
        return ResponseEntity.ok(fruitsService.getAllFruits());
    }

    // 2. 根据ID获取水果
    @GetMapping("/{id}")
    public ResponseEntity<Fruits> getFruitById(@PathVariable Long id) {
        Optional<Fruits> fruit = fruitsService.getFruitsById(id);
        return fruit.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. 根据SKU获取水果
    @GetMapping("/sku/{skuCode}")
    public ResponseEntity<Fruits> getFruitBySku(@PathVariable String skuCode) {
        Optional<Fruits> fruit = fruitsService.getFruitsBySkuCode(skuCode);
        return fruit.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 4. 根据分类获取水果
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Fruits>> getFruitsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(fruitsService.getFruitsByCategory(category));
    }

    // 5. 搜索水果
    @GetMapping("/search")
    public ResponseEntity<List<Fruits>> searchFruits(@RequestParam String keyword) {
        return ResponseEntity.ok(fruitsService.searchFruits(keyword));
    }

    // 6. 获取上架中的水果
    @GetMapping("/on-sale")
    public ResponseEntity<List<Fruits>> getOnSaleFruits() {
        return ResponseEntity.ok(fruitsService.getOnSaleFruits());
    }

    // 7. 获取低库存水果
    @GetMapping("/low-stock")
    public ResponseEntity<List<Fruits>> getLowStockFruits(@RequestParam(defaultValue = "10") Integer threshold) {
        return ResponseEntity.ok(fruitsService.getLowStockFruits(threshold));
    }

    // 8. 创建水果
    @PostMapping
    public ResponseEntity<Fruits> createFruit(@RequestBody Fruits fruit) {
        try {
            Fruits createdFruit = fruitsService.createFruits(fruit);
            return ResponseEntity.ok(createdFruit);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 9. 更新水果
    @PutMapping("/{id}")
    public ResponseEntity<Fruits> updateFruit(@PathVariable Long id, @RequestBody Fruits fruitDetails) {
        try {
            Fruits updatedFruit = fruitsService.updateFruits(id, fruitDetails);
            return ResponseEntity.ok(updatedFruit);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 10. 删除水果
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteFruit(@PathVariable Long id) {
        boolean deleted = fruitsService.deleteFruits(id);
        Map<String, Object> response = new HashMap<>();
        response.put("success", deleted);
        response.put("message", deleted ? "删除成功" : "水果不存在");
        return ResponseEntity.ok(response);
    }

    // 11. 上下架切换
    @PatchMapping("/{id}/sale-status")
    public ResponseEntity<Fruits> toggleSaleStatus(@PathVariable Long id, @RequestParam Boolean status) {
        try {
            Fruits updatedFruit = fruitsService.toggleSaleStatus(id, status);
            return ResponseEntity.ok(updatedFruit);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 12. 更新库存
    @PatchMapping("/{id}/stock")
    public ResponseEntity<Fruits> updateStock(@PathVariable Long id, @RequestParam Integer quantity) {
        try {
            Fruits updatedFruit = fruitsService.updateStock(id, quantity);
            return ResponseEntity.ok(updatedFruit);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 13. 检查库存
    @GetMapping("/{id}/check-stock")
    public ResponseEntity<Map<String, Object>> checkStock(@PathVariable Long id, @RequestParam Integer required) {
        try {
            boolean available = fruitsService.checkStock(id, required);
            Map<String, Object> response = new HashMap<>();
            response.put("available", available);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 14. 计算毛利率
    @GetMapping("/{id}/profit-margin")
    public ResponseEntity<Map<String, Object>> calculateProfitMargin(@PathVariable Long id) {
        try {
            BigDecimal margin = fruitsService.calculateProfitMargin(id);
            Map<String, Object> response = new HashMap<>();
            response.put("profitMargin", margin);
            response.put("profitMarginPercentage", margin + "%");
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // 15. 获取水果总数
    @GetMapping("/count")
    public ResponseEntity<Map<String, Object>> getFruitsCount() {
        long count = fruitsService.getFruitsCount();
        Map<String, Object> response = new HashMap<>();
        response.put("count", count);
        return ResponseEntity.ok(response);
    }

    // 16. 按排序权重获取水果
    @GetMapping("/sorted")
    public ResponseEntity<List<Fruits>> getSortedFruits() {
        return ResponseEntity.ok(fruitsService.getFruitsBySortWeight());
    }

    // 17. 获取统计信息
    @GetMapping("/statistics")
    public ResponseEntity<Map<String, Object>> getStatistics() {
        List<Fruits> allFruits = fruitsService.getAllFruits();
        List<Fruits> onSaleFruits = fruitsService.getOnSaleFruits();
        List<Fruits> lowStockFruits = fruitsService.getLowStockFruits(10);

        Map<String, Object> stats = new HashMap<>();
        stats.put("total", allFruits.size());
        stats.put("onSale", onSaleFruits.size());
        stats.put("lowStock", lowStockFruits.size());
        stats.put("offSale", allFruits.size() - onSaleFruits.size());

        return ResponseEntity.ok(stats);
    }
}