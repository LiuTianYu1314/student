package com.example.demo.repository;

import com.example.demo.entity.Fruits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface
FruitsRepository extends JpaRepository<Fruits, Long> {
    // 根据SKU编码查询
    Optional<Fruits> findBySkuCode(String skuCode);

    // 根据分类查询
    List<Fruits> findByCategory(String category);

    // 根据名称或SKU模糊查询
    List<Fruits> findByNameContainingOrSkuCodeContaining(String name, String skuCode);

    // 查询上架中的水果
    List<Fruits> findByIsOnSaleTrue();

    // 查询低库存水果
    List<Fruits> findByStockNumLessThan(Integer stockNum);

    // 检查SKU是否存在
    boolean existsBySkuCode(String skuCode);

    // 按排序权重降序排列
    List<Fruits> findAllByOrderBySortWeightDesc();
}